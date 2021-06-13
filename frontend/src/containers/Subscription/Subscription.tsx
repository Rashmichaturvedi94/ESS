import React, { FC } from "react";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@material-ui/core";
import { useParams, useHistory } from "react-router-dom";
import { SubContainer } from "./Subscription.styles";
import { useCourse, usePostSubscription } from "../../api";
import { SubscriptionForm } from "../../components/SubscriptionForm";
import { getUserIdFromLocalStorage } from "../../api/api.helpers";
import { Course, CourseParams } from "../../api/api.interface";
import { appPaths } from "../../const/paths";

export const Subscription: FC = () => {
  const history = useHistory();
  const { courseId } = useParams<CourseParams>();
  const { isLoading, data:course } = useCourse({ courseId });
  const { mutate } = usePostSubscription();
  const getImage = (courseObj?: Course) => typeof courseObj?.img === 'string' ? courseObj?.img : 'https://content.techgig.com/thumb/msid-79844104,width-860,resizemode-4/5-Best-programming-languages-to-learn-in-2021.jpg?140622';
  const [open, setOpen] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);


  const handleClose = () => {
    setOpen(false);
    history.push(appPaths.myCourses);
  };

  const handleCloseError = () => {
    setOpenError(false);
  };

  return (
    <SubContainer>
      <Box style={{ marginLeft: 50, marginTop: 50 }}>
        <Box style={{ marginLeft: 40, marginRight: 110 }}>
          <img
            src={getImage(course)}
            style={{ height: 450, width: 600, overflow: "hidden" }}
            alt={course?.title}
          />
        </Box>
      </Box>

      <SubscriptionForm
        isLoading={isLoading}
        initialValues={{
          title: course?.title ?? "",
          description: course?.description ?? "",
          price: course?.price ?? 10,
          course: courseId as unknown as number ?? 0,
          subscriber: getUserIdFromLocalStorage() ?? 0,
          active: true,
        }}
        onSubmit={(data) => {
          mutate(
          {data}, 
          { onSuccess:() => { setOpen(true); }, onError:() => { setOpenError(true); }});
        }}
      />
      <Dialog
        open={open}
        onClose={handleClose}
      >
      <DialogContent>
        <DialogContentText>
          Course successfully Subscribed.
        </DialogContentText>
      </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openError}
        onClose={handleClose}
      >
      <DialogContent>
        <DialogContentText>
          Course already Subscribed.
        </DialogContentText>
      </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseError} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </SubContainer>
  );
};
