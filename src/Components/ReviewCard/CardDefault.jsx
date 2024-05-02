import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { assets } from "../../assets/assets";
   
  export function CardDefault() {
    return (
      <>
     
      <Card className="mt-6 w-96 ">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={assets.m2}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-4">
          Abhimanyu Garbh Sanskar ( English )
          </Typography>
          <Typography>
          Abhimanyu Garbh Sanskar Committed towards Healthy & Happy Motherhood. Invest your 2 Days wisely..and Get Healthy-Wealthy Baby- & Fit Mom - Smart Father for Life Long ★ World's First workshop & Course based on time tested research of Garb..
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
           src={assets.m3}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
          Abhimanyu Garbh Sanskar ( English )
          </Typography>
          <Typography>
          Abhimanyu Garbh Sanskar Committed towards Healthy & Happy Motherhood. Invest your 2 Days wisely..and Get Healthy-Wealthy Baby- & Fit Mom - Smart Father for Life Long ★ World's First workshop & Course based on time tested research of Garb..
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56 bg-cover object-fill">
          <img
            src={assets.m5}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
          Abhimanyu Garbh Sanskar ( English )
          </Typography>
          <Typography>
          Abhimanyu Garbh Sanskar Committed towards Healthy & Happy Motherhood. Invest your 2 Days wisely..and Get Healthy-Wealthy Baby- & Fit Mom - Smart Father for Life Long ★ World's First workshop & Course based on time tested research of Garb..
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>

      </>
    );
  }

  export default CardDefault