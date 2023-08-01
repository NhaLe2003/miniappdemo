import React from "react";
import { Sheet, Button, Page, Text, useNavigate, Input } from "zmp-ui";

const CheckinPage: React.FunctionComponent = (props) => {
  const [actionSheetOpened, setActionSheetOpened] = React.useState(false);
  const navigate = useNavigate()
  return (
    <Page className="page">
      <div className="section-container">
        <Input type= "text" placeholder ="Your Name"></Input>
      </div>
      <div className = "section-container">
        <div className = "display-date">
          <span id = "day">day</span>,
          <span id = "daynum"> 00 </span>
          <span id = "month" > month </span>
          <span id = "year"> 0000 </span>
        </div>
        <script src = "DateTime.js">

        </script>
      </div>
      <div>
      <Button
          variant = 'secondary'
          fullWidth
      >
          Check In
        </Button>
      </div>
      <div>
        <Button
          variant='secondary'
          fullWidth
          onClick={() => setActionSheetOpened(true)}
        >
          Back
        </Button>
      </div>
      <Sheet.Actions
        visible={actionSheetOpened}
        onClose={() => setActionSheetOpened(false)}
        actions={[
          [
            {
              text: "Go back",
              onClick: () => {
                navigate(-1);
              },
            },
          ],
          [
            {
              text: "Close",
              close: true,
              danger: true,
            },
          ],
        ]}
      ></Sheet.Actions>
    </Page>
  );
};

export default CheckinPage;