import React, { FC } from "react";
import { Box } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { SubContainer } from "./Subscription.styles";
import { useCourse, usePostSubscription } from "../../api";
import { SubscriptionForm } from "../../components/SubscriptionForm";
import { getUserIdFromLocalStorage } from "../../api/api.helpers";
import { Course, CourseParams } from "../../api/api.interface";

export const Subscription: FC = () => {
  const { courseId } = useParams<CourseParams>();
  const course = useCourse({ courseId });
  const { mutate } = usePostSubscription();
  const getImage = (courseObj?: Course) => typeof courseObj?.img === 'string' ? courseObj?.img : '';

  return (
    <SubContainer>
      <Box style={{ marginLeft: 50, marginTop: 50 }}>
        <Box style={{ marginLeft: 40, marginRight: 110 }}>
          <img
            src={getImage(course.data)}
            style={{ height: 450, width: 600, overflow: "hidden" }}
            alt={course.data?.title}
          />
        </Box>
      </Box>

      <SubscriptionForm
        initialValues={{
          title: course.data?.title ?? "tttt",
          description: course.data?.description ?? "tttt",
          price: course.data?.price ?? 10,
          course: course.data?.id ?? 0,
          subscriber: getUserIdFromLocalStorage() ?? 0,
          active: true,
        }}
        onSubmit={(data) => {
          mutate({
            data,
            params: {
              price: course.data?.price,
              course: course.data?.id,
              subscriber: getUserIdFromLocalStorage(),
              active: true,
            },
          });
        }}
      />
    </SubContainer>
  );
};
