import { Button, Container, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from '../components/Navbar';
import { useEffect, useState } from "react";
import { BASE_URL } from '../utils';
import video3 from '/home/gambi/P3/P3-project/front-end/src/assets/video3.mp4'
import "./AddToCatalogue.css";



const schema = z.object({
  name: z
    .string({
      required_error: "Username is required",
    })
    .min(1, { message: "Username is required" }),

  description: z
    .string({
      required_error: "Description is required",
    })
    .min(1, { message: "Description is required" }),
  
  image: z
    .string({
      required_error: "Image is required",
    })
    .min(1, { message: "Image is required" })
    .url({ message: "Enter a valid image url" }),

  date_published: z.string({
    required_error: "Date Published is required",
  }),
});

const AddToCatalogue = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/models`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // Update state or perform other actions with fetched data if needed
      })
      .catch((err) => console.log(err));
  }, []);
  

  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      image: "",
      owner: "",
      model_id: "",
      date_published: "",
    },
  });

  console.log(formState.errors);

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <>
      <video className="video-background" autoPlay loop muted volume="0.2">
        <source src={video3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
        <Container className="container">
          <Navbar />
          <div className="center-container">
          <Form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                  <Form.Label className="form-label">Username</Form.Label>
                  <Form.Control type="text" placeholder="Username" className="form-control" {...field} />
                  {fieldState.invalid && (
                    <Form.Text className="text-danger form-text">
                      {fieldState.error.message}
                    </Form.Text>
                  )}
                </Form.Group>
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field, fieldState }) => (
                <Form.Group className="mb-3 form-group">
                  <Form.Label className="form-label">Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Description"
                    className="form-control"
                    {...field}
                  />

                  {fieldState.invalid && (
                    <Form.Text className="text-danger form-text">
                      {fieldState.error.message}
                    </Form.Text>
                  )}
                </Form.Group>
              )}
            />
            <Controller
              name="image"
              control={control}
              render={({ field, fieldState }) => (
                <Form.Group className="mb-3 form-group">
                  <Form.Label className="form-label">Image</Form.Label>
                  <Form.Control type="text" placeholder="Image URL" className="form-control" {...field} />

                  {fieldState.invalid && (
                    <Form.Text className="text-danger form-text">
                      {fieldState.error.message}
                    </Form.Text>
                  )}
                </Form.Group>
              )}
            />

            <Controller
              name="date_published"
              control={control}
              render={({ field, fieldState }) => (
                <Form.Group className="mb-3 form-group">
                  <Form.Label className="form-label">Date published</Form.Label>
                  <Form.Control
                    type="datetime-local"
                    placeholder="Date published"
                    className="form-control"
                    {...field}
                  />

                  {fieldState.invalid && (
                    <Form.Text className="text-danger form-text">
                      {fieldState.error.message}
                    </Form.Text>
                  )}
                </Form.Group>
              )}
            />
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              feedbackType="invalid"
              id="validationFormik106"
              feedbackTooltip
              className="form-check-label"
            />
            <Button variant="primary btn-primary" type="submit">
              Submit
            </Button>
          </Form>
          </div>
        </Container>
    </>
  );
};

export default AddToCatalogue;
