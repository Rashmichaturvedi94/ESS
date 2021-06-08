import React, { FC } from "react";
import { Box } from "@material-ui/core";
// import Image from 'react-bootstrap/Image';

import { useUser } from "../../api";
import { getUserIdFromLocalStorage } from "../../api/api.helpers";
import { SubContainer } from "./Subscription.styles";
import { SubscriptionForm } from "../../components/SubscriptionForm";

export const Subscription: FC = () => {
  const user = useUser({ userId: getUserIdFromLocalStorage() });

  return (
    <SubContainer>
      <Box flex={1} display="flex" alignItems="center" justifyContent="center">
        <Box width="40%" height="60%" >
          <img src="https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg" style={{ height: 400, width: 550, overflow: 'hidden'}} alt='text'/>
          {/* <Image src=
            'https://marvel-b1-cdn.bc0a.com/f00000000156946/www.jrebel.com/sites/rebel/files/image/2020-05/image-blog-revel-top-java-tools.jpg'
            roundedCircle/>; */}
        </Box>
        <Box display="flex" flexDirection="column" width="40%" height="60%" marginLeft='50px'>
          <SubscriptionForm
            initialValues={{
              title: user.data?.username ?? "",
              description: user.data?.username ?? "",
              price: user.data?.email ?? "",
              method: user.data?.email ?? "",
            }}
            onSubmit={(data) => {
              console.log(data);
            }}
          />
        </Box>
      </Box>
    </SubContainer>
  );
};
