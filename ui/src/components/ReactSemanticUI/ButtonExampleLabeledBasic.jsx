import React from "react";
import { Button, Icon, Label, Input, Dropdown } from "semantic-ui-react";

const ButtonExampleLabeledBasic = () => (
  <div>
    <Button basic color="red" content="Red" />
    <Button as="a" basic color="red" content="Red" />
    <Button icon="like" />
    <Button>
      <Icon name="like" />
    </Button>
    <Input
      action={{
        icon: "search",
        onClick: () => console.log("An action was clicked!"),
      }}
      actionPosition="right"
      placeholder="Search..."
    />
    <Dropdown text="File" icon={null}>
      <Dropdown.Menu>
        <Dropdown.Item text="New" />
        <Dropdown.Item text="Open..." description="ctrl + o" />
        <Dropdown.Item text="Save as..." description="ctrl + s" />
        <Dropdown.Item text="Rename" description="ctrl + r" />
        <Dropdown.Item text="Make a copy" />
        <Dropdown.Item icon="folder" text="Move to folder" />
        <Dropdown.Item icon="trash" text="Move to trash" />
        <Dropdown.Divider />
        <Dropdown.Item text="Download As..." />
        <Dropdown.Item text="Publish To Web" />
        <Dropdown.Item text="E-mail Collaborators" />
      </Dropdown.Menu>
    </Dropdown>
    {/* <Button as="div" labelPosition="right">
      <Label as="a" basic color="red" pointing="left">
        2,048
      </Label>
      <Button color="red">
        <Icon name="heart" />
        Like
      </Button>
    </Button>
    <Button as="div" labelPosition="right">
      <Button basic color="blue">
        <Icon name="fork" />
        Fork
      </Button>
      <Label as="a" basic color="blue" pointing="left">
        2,048
      </Label>
    </Button>
    <Button content="Standard" basic />
    <Button basic color="red" content="Red" />
    <Button basic color="orange" content="Orange" />
    <Button basic color="yellow" content="Yellow" />
    <Button basic color="olive" content="Olive" />
    <Button basic color="green" content="Green" />
    <Button basic color="teal" content="Teal" />
    <Button basic color="blue" content="Blue" />
    <Button basic color="violet" content="Violet" />
    <Button basic color="purple" content="Purple" />
    <Button basic color="pink" content="Pink" />
    <Button basic color="brown" content="Brown" />
    <Button basic color="grey" content="Grey" />
    <Button basic color="black" content="Black" />
    <Button color='red'>Red</Button>
    <Button color='orange'>Orange</Button>
    <Button color='yellow'>Yellow</Button>
    <Button color='olive'>Olive</Button>
    <Button color='green'>Green</Button>
    <Button color='teal'>Teal</Button>
    <Button color='blue'>Blue</Button>
    <Button color='violet'>Violet</Button>
    <Button color='purple'>Purple</Button>
    <Button color='pink'>Pink</Button>
    <Button color='brown'>Brown</Button>
    <Button color='grey'>Grey</Button>
    <Button color='black'>Black</Button>
    <Button.Group>
      <Button>One</Button>
      <Button.Or />
      <Button>Two</Button>
      <Button.Or />
      <Button>Three</Button>
    </Button.Group>
    <Button color="facebook">
      <Icon name="facebook" /> Facebook
    </Button>
    <Button color="twitter">
      <Icon name="twitter" /> Twitter
    </Button>
    <Button color="google plus">
      <Icon name="google plus" /> Google Plus
    </Button>
    <Button color="vk">
      <Icon name="vk" /> VK
    </Button>
    <Button color="linkedin">
      <Icon name="linkedin" /> LinkedIn
    </Button>
    <Button color="instagram">
      <Icon name="instagram" /> Instagram
    </Button>
    <Button color="youtube">
      <Icon name="youtube" /> YouTube
    </Button> */}
  </div>
);

export default ButtonExampleLabeledBasic;
