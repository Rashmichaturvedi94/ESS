export const paths = {
  login: "/login",
  resetPassword: "/reset-password",
  logout: "/logout",
  register: "/register",
  app: "/app",
};

export const appPaths = {
  user: `${paths.app}/user`,
  searchCourse: `${paths.app}/search`,
  myCourses: `${paths.app}/mycourses`,
  subscribeCourse: `${paths.app}/subscribe/:courseId`,
  createCourse: `${paths.app}/course`,
  courseDetail: `${paths.app}/course/:courseId`,
  createCourseContent: `${paths.app}/course/:courseId/createCourseContent`,
  courseContent: `${paths.app}/course/:courseId/courseContent`,
};
