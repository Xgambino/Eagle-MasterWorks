import { Button, Container, Form } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import Navbar from '../components/Navbar';
import { useEffect, useState } from "react";
import { BASE_URL } from '../utils';
import video3 from '/home/gambi/P3/P3-project/front-end/src/assets/video3.mp4'
import "./AddToCatalogue.css";

const schema = z.object({
  name: z.string({
    required_error: "Username is required",
  }).min(1, { message: "Username is required" }),
  description: z.string({
    required_error: "Description is required",
  }).min(1, { message: "Description is required" }),
  image: z.string({
    required_error: "Image is required",
  }).min(1, { message: "Image is required" }).url({ message: "Enter a valid image URL" }),
  year_of_manufacture: z.string({
    required_error: "Year Of Manufacture is required",
  }).min(1, { message: "Year Of Manufacture is required" }),
  price: z.string().min(1, {message:'Price is required'})
  });

const AddToCatalogue = () => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchModels();
  }, []);

  const fetchModels = () => {
    fetch(`${BASE_URL}/models`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setModels(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching models:", err);
        setError(err.message || "Failed to fetch models");
        setLoading(false);
      });
  };

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      name: "",
      description: "",
      image: "",
      owner: "",
      model_id: "",
      date_published: "",
      price:""
    },
  });

  const onSubmit = async (values) => {
    fetch(`${BASE_URL}/catalogue`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...values, price: Number(values.price),model_id:Number(values.model_id)}),
    }).then((res)=> res.json()).then(data=> console.log(data)).catch((err)=> console.log(er));
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
              rules={{ 
                required: 'Username is required',
                minLength: {
                  value: 1,
                  message: 'Username is required',
                }
              }}
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
              rules={{ 
                required: 'Description is required',
                minLength: {
                  value: 1,
                  message: 'Description is required',
                }
              }}
              render={({ field, fieldState }) => (
                <Form.Group className="mb-3 form-group">
                  <Form.Label className="form-label">Description</Form.Label>
                  <Form.Control as="textarea" placeholder="Description" className="form-control" {...field} />
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
              rules={{ 
                required: 'Image is required',
                minLength: {
                  value: 1,
                  message: 'Image is required',
                },
                pattern: {
                  value: /^https?:\/\/.+$/i,
                  message: 'Enter a valid image URL',
                }
              }}
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
              rules={{ 
                required: 'Date Published is required',
              }}
              render={({ field, fieldState }) => (
                <Form.Group className="mb-3 form-group">
                  <Form.Label className="form-label">Year of Manufacture</Form.Label>
                  <Form.Control type="datetime-local" placeholder="Year of Manufacture" className="form-control" {...field} />
                  {fieldState.invalid && (
                    <Form.Text className="text-danger form-text">
                      {fieldState.error.message}
                    </Form.Text>
                  )}
                </Form.Group>
              )}
            />
            <Controller
              name="Price"
              control={control}
              rules={{ 
                required: 'Price is required',
                minLength: {
                  value: 1,
                  message: 'Price is required',
                }
              }}
              render={({ field, fieldState }) => (
                <Form.Group className="mb-3 form-group" controlId="formBasicEmail">
                  <Form.Label className="form-label">Price</Form.Label>
                  <Form.Control type="number" placeholder="In-put Price" className="form-control" {...field} />
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
            <Button variant="primary btn-primary" type="submit" disabled={formState.isSubmitting}>
              {formState.isSubmitting ? 'Saving...':'Submit'}
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default AddToCatalogue;
