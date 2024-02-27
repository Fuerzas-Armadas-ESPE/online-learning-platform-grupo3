import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import { getCoursesFromFirestore } from "../api/coursesApi";

const CourseCard = ({ course }) => {
  return (
    <Grid item lg={6} >
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={course.image}
            alt={course.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {course.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {course.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link href={course.url} underline="none" color="inherit">
              {course.url}
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesData = await getCoursesFromFirestore();
      const formattedCourses = coursesData.map((course) => ({
        ...course,
        create: course.create.toDate(),
      }));
      setCourses(formattedCourses);
    };

    fetchCourses();
  }, []);

  return (
    <Grid container spacing={2}>
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </Grid>
  );
};

export default Courses;
