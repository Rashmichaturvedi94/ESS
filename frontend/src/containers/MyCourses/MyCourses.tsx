import React, { FC } from "react";
import { Box, GridList, Typography, GridListTile, Divider } from "@material-ui/core";
import { useHistory, generatePath  } from 'react-router-dom';
import { appPaths } from '../../const/paths';
import { MyCoursesProps } from "./MyCourses.interface";
import { useSubscriptions } from "../../api";
import { Course } from "../../api/api.interface";

export const MyCourses: FC<MyCoursesProps> = () => {
  const subscriptions = useSubscriptions();
  const history = useHistory();

  const getImage = (course: Course) =>
    typeof course.img === "string" ? course.img : "";
  return (
    <Box style={{ marginLeft: 20, marginRight: 20 }}>
      <Typography variant="h4" component="h2" align="left">
        Subscribed
      </Typography>
      <Divider style={{ color: "black", height: 5, marginTop: 30, marginBottom: 30 }} />
      <GridList>
        {subscriptions.data?.map((subscription) => (
          <GridListTile
            key={subscription.course.id}
            onClick={() => history.push(generatePath(appPaths.courseContent, { courseId: subscription.course.id }))}
            style={{
              height: 258,
              width: 224,
              border: "2px solid black",
              margin: 30,
            }}
          >
            <img
              src={getImage(subscription.course)}
              style={{ height: 196, width: 220, overflow: "hidden" }}
              alt={subscription.course.title}
            />
            <Typography>{subscription.course.title}</Typography>
            <Typography>{subscription.course.description}</Typography>
          </GridListTile>
        ))}
      </GridList>
    </Box>
  );
};
