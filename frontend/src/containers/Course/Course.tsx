import React, { FC } from "react";
import { Box } from "@material-ui/core";
import { useHistory, generatePath } from "react-router-dom";
import { appPaths } from "../../const/paths";
import { Course as CourseComponent } from "./Course.styles";
import { CourseProps } from "./Course.interface";
import { CourseForm } from "../../components/CourseForm";
import { usePostCourse } from "../../api";

export const Course: FC<CourseProps> = () => {
  const { mutate } = usePostCourse();
  const history = useHistory();
  return (
    <CourseComponent>
      <Box flex={1} display="flex" alignItems="center" justifyContent="center">
        <Box width="30%">
          <CourseForm
            onSubmit={(data) => {
              mutate(
                { data },
                {
                  onSuccess: (d) => {
                    history.push(
                      generatePath(appPaths.createCourseContent, {
                        courseId: d.id,
                      })
                    );
                  },
                }
              );
            }}
          />
        </Box>
        <Box display="flex" flexDirection="column" width={320} gridRowGap={20}>
          <div />
        </Box>
      </Box>
    </CourseComponent>
  );
};
