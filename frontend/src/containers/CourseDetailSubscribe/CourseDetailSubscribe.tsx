import React, { FC } from "react";
import { Typography, Box, Divider } from "@material-ui/core";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LayersIcon from "@material-ui/icons/Layers";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShareIcon from "@material-ui/icons/Share";
import { useParams, useHistory, generatePath } from "react-router-dom";
import {
  CourseDetailSubscribe as CourseDetailSubscribeComponent,
  AuthorText,
  CourseText,
  DetailText,
  ButtonText,
} from "./CourseDetailSubscribe.styles";
import { CourseDetailSubscribeProps } from "./CourseDetailSubscribe.interface";
import { useCourse } from "../../api";
import { CourseParams } from "../../api/api.interface";
import { appPaths } from "../../const/paths";

export const CourseDetailSubscribe: FC<CourseDetailSubscribeProps> = () => {
  const { courseId } = useParams<CourseParams>();
  const course = useCourse({ courseId });
  const history = useHistory();

  return (
    <CourseDetailSubscribeComponent>
      <Box style={{ marginLeft: 50, marginTop: 50 }}>
        <Box flex={1} display="flex" style={{ marginLeft: 450 }}>
          <PersonPinCircleIcon style={{ fontSize: 30 }} />
          <AuthorText>Author</AuthorText>
        </Box>
        <Box style={{ marginLeft: 40, marginRight: 110 }}>
          <img
            src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg"
            style={{ height: 450, width: 600, overflow: "hidden" }}
            alt={course.data?.title}
          />
          <CourseText>{course.data?.title}</CourseText>
          <Typography>{course.data?.description}</Typography>
        </Box>
      </Box>
      <Divider orientation="vertical" style={{ color: "black", width: 5 }} />
      <Box>
        <Box flex={1} display="flex" style={{ marginLeft: 100, marginTop: 50 }}>
          <ScheduleIcon style={{ fontSize: 40 }} />
          <DetailText>Duration</DetailText>
          <DetailText>{course.data?.title}</DetailText>
        </Box>
        <Box flex={1} display="flex" style={{ marginLeft: 100, marginTop: 50 }}>
          <LayersIcon style={{ fontSize: 40 }} />
          <DetailText>Lessons</DetailText>
          <DetailText>{course.data?.description}</DetailText>
        </Box>
        <Box flex={1} display="flex" style={{ marginLeft: 100, marginTop: 50 }}>
          <PersonOutlineIcon style={{ fontSize: 40 }} />
          <DetailText>Participants</DetailText>
          <DetailText>{course.data?.created_by}</DetailText>
        </Box>
        <Box flex={1} display="flex" style={{ marginLeft: 100, marginTop: 50 }}>
          <CreditCardIcon style={{ fontSize: 40 }} />
          <DetailText>Price</DetailText>
          <DetailText>${course.data?.price}</DetailText>
        </Box>
        <Box
          display="flex"
          style={{ marginLeft: 100, marginTop: 90, backgroundColor: "#C4C4C4" }}
        >
          <ButtonText
            fullWidth
            variant="text"
            onClick={() =>
              history.push(
                generatePath(appPaths.subscribeCourse, {
                  courseId: course.data?.id,
                })
              )
            }
          >
            <AddShoppingCartIcon style={{ fontSize: 35 }} />
            Subscribe
          </ButtonText>
        </Box>
        <Box
          display="flex"
          style={{ marginLeft: 100, marginTop: 30, backgroundColor: "#C4C4C4" }}
        >
          <ButtonText fullWidth variant="text">
            Add to Wishlist
          </ButtonText>
        </Box>
        <Box display="flex" style={{ marginLeft: 100, marginTop: 30 }}>
          <ButtonText fullWidth variant="text">
            <ShareIcon style={{ fontSize: 40 }} />
            Share with Others
          </ButtonText>
        </Box>
      </Box>
    </CourseDetailSubscribeComponent>
  );
};
