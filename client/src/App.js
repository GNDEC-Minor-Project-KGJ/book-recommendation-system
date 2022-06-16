import {
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import './App.css';
// import axios from 'axios';
import React from 'react';

function App() {

  // React.useEffect(() => {
  //   axios
  //     .post("http://127.0.0.1:5000/content-based-filtering/recommend-by-title")
  //     json.stringify
  //     .then((response) => {
  //      console.log(response.data);
  //     });
  // }, []);

  return (
    <div className="App">
      <div className="m-6 p-6 flex flex-col justify-center items-center">
        <Input
          size="lg"
          variant="static"
          label="Book Title"
          placeholder="Harry Potter"
        />
        <Button className="mt-6" variant="gradient" size="lg">
          Recommend
        </Button>
      </div>
      <div className="m-6 p-6 flex flex-row flex-basis-auto justify-center items-center flex-wrap">
        <Card className="w-96 m-6">
          <CardHeader color="blue" className="relative h-56">
            <img
              src="/img/blog.jpg"
              alt="img-blur-shadow"
              className="w-full h-full"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h5" className="mb-2">
              Cozy 5 Stars Apartment
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter
            divider
            className="flex items-center justify-between py-3"
          >
            <Typography variant="small">$899/night</Typography>
            <Typography variant="small" color="grey" className="flex gap-1">
              <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
              Barcelona, Spain
            </Typography>
          </CardFooter>
        </Card>
        <Card className="w-96 m-6">
          <CardHeader color="blue" className="relative h-56">
            <img
              src="/img/blog.jpg"
              alt="img-blur-shadow"
              className="w-full h-full"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h5" className="mb-2">
              Cozy 5 Stars Apartment
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter
            divider
            className="flex items-center justify-between py-3"
          >
            <Typography variant="small">$899/night</Typography>
            <Typography variant="small" color="grey" className="flex gap-1">
              <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
              Barcelona, Spain
            </Typography>
          </CardFooter>
        </Card>
        <Card className="w-96 m-6">
          <CardHeader color="blue" className="relative h-56">
            <img
              src="/img/blog.jpg"
              alt="img-blur-shadow"
              className="w-full h-full"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h5" className="mb-2">
              Cozy 5 Stars Apartment
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter
            divider
            className="flex items-center justify-between py-3"
          >
            <Typography variant="small">$899/night</Typography>
            <Typography variant="small" color="grey" className="flex gap-1">
              <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
              Barcelona, Spain
            </Typography>
          </CardFooter>
        </Card>
        <Card className="w-96 m-6">
          <CardHeader color="blue" className="relative h-56">
            <img
              src="/img/blog.jpg"
              alt="img-blur-shadow"
              className="w-full h-full"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h5" className="mb-2">
              Cozy 5 Stars Apartment
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter
            divider
            className="flex items-center justify-between py-3"
          >
            <Typography variant="small">$899/night</Typography>
            <Typography variant="small" color="grey" className="flex gap-1">
              <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
              Barcelona, Spain
            </Typography>
          </CardFooter>
        </Card>
        <Card className="w-96 m-6">
          <CardHeader color="blue" className="relative h-56">
            <img
              src="/img/blog.jpg"
              alt="img-blur-shadow"
              className="w-full h-full"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography variant="h5" className="mb-2">
              Cozy 5 Stars Apartment
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to &quot;Naviglio&quot; where you can enjoy the main
              night life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter
            divider
            className="flex items-center justify-between py-3"
          >
            <Typography variant="small">$899/night</Typography>
            <Typography variant="small" color="grey" className="flex gap-1">
              <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
              Barcelona, Spain
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default App;
