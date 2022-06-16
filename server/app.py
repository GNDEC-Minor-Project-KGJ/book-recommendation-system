from flask import Flask
from flask import request
import pickle
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from flask import jsonify

books = pickle.load(open('models/Content-Based-Filtering/books.pkl', 'rb'))
cosine_similarity = pickle.load(open('models/Content-Based-Filtering/cosine_similarity.pkl', 'rb'))


app = Flask(__name__)


@app.route('/')
def index():
    return "Hello World"


@app.route('/content-based-filtering/recommend-by-title', methods=['GET', 'POST'])
def recommendByTitle():
    if request.method == 'POST':
        data = request.get_json()
        title = data['bookTitle']
        genre = data['bookGenre']
        # Matching the genre with the dataset and reset the index
        data = books.loc[books['genre'] == genre]
        data.reset_index(level=0, inplace=True)

        # Convert the index into series
        indices = pd.Series(data.index, index=data['title'])

        # Converting the book title into vectors and used bigram
        tf = TfidfVectorizer(analyzer='word', ngram_range=(
            2, 2), min_df=1, stop_words='english')
        tfidf_matrix = tf.fit_transform(data['title'])

        # Calculating the similarity measures based on Cosine Similarity
        sg = cosine_similarity(tfidf_matrix, tfidf_matrix)

        # Get the index corresponding to original_title

        idx = indices[title]
        # Get the pairwsie similarity scores
        sig = list(enumerate(sg[idx]))

        # Sort the books
        sig = sorted(sig, key=lambda x: x[1], reverse=True)

        # Scores of the 5 most similar books
        sig = sig[1:7]

        # Book indicies
        movie_indices = [i[0] for i in sig]

        # Top 5 book recommendation
        rec = data[['title', 'Desc', 'url', 'author']].iloc[movie_indices]

        # It reads the top 10 recommend book

        print("TOP 10 Recommended Books are... \n")

        data = []

        index = 1
        for i in movie_indices:
            title = rec['title'][i]
            author = rec['author'][i]
            desc = rec['Desc'][i]
            url = rec['url'][i]
            data.append({'title': title, 'desc': desc,
                        'url': url, 'genre': genre})
            index += 1
        res = {'data': data}
        return res


@app.route('/content-based-filtering/recommend-by-description', methods=['GET', 'POST'])
def recommendByDesc():
    data = request.get_json()
    title = data['bookTitle']
    genre = data['bookGenre']

    data = books.loc[books['genre'] == genre]
    data.reset_index(level=0, inplace=True)

    # Convert the index into series
    indices = pd.Series(data.index, index=data['title'])

    # Converting the book description into vectors and used bigram
    tf = TfidfVectorizer(analyzer='word', ngram_range=(
        2, 2), min_df=1, stop_words='english')
    tfidf_matrix = tf.fit_transform(data['cleaned_desc'])

    # Calculating the similarity measures based on Cosine Similarity
    sg = cosine_similarity(tfidf_matrix, tfidf_matrix)

    # Get the index corresponding to original_title

    idx = indices[title]

    # Get the pairwsie similarity scores
    sig = list(enumerate(sg[idx]))

    # Sort the books
    sig = sorted(sig, key=lambda x: x[1], reverse=True)

    # Scores of the 10 most similar books
    sig = sig[1:7]

    # Book indicies
    movie_indices = [i[0] for i in sig]

    # Top 10 book recommendation
    rec = data[['title', 'url', 'Desc', 'genre']].iloc[movie_indices]

    # It reads the top 10 recommend
    print("TOP 10 Recommended Books are... \n")

    data = []

    index = 1
    for i in movie_indices:
        title = rec['title'][i]
        desc = rec['Desc'][i]
        url = rec['url'][i]
        genre = rec['genre'][i]
        data.append({'title': title, 'desc': desc, 'url': url, 'genre': genre})
        print(index, " ", title, " ", desc, " ", url, " ", genre)
        index += 1

    res = {'data': data}
    return res


if __name__ == '__main__':
    app.run(debug=True)
