import React, { useEffect, useState } from "react";
import { getCoursesFromFirestore } from "../api/coursesApi";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesData = await getCoursesFromFirestore();
        const formattedCourses = coursesData.map((course) => ({
          ...course,
          create: course.create.toDate(),
        }));
        setCourses(formattedCourses);
      } catch (error) {
        console.error("Error fetching courses: ", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <h1>Courses</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Instructor</th>
            <th>Created</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.description}</td>
              <td>{course.instructor}</td>
              <td>{new Date(course.create).toLocaleString()}</td>
              <td>
                <a href={course.url}>{course.url}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
