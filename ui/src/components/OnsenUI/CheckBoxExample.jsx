import React from 'react'
import { Checkbox, List, ListItem } from 'react-onsenui'

export default function CheckBoxExample() {
  return (
    <List>
        <ListItem tappable>
        <label class="left">
            <Checkbox input-id="check-1"></Checkbox>
        </label>
        <label for="check-1" class="center">
            Apple
        </label>
        </ListItem>
        <ListItem tappable>
        <label class="left">
            <Checkbox input-id="check-2"></Checkbox>
        </label>
        <label for="check-2" class="center">
            Banana
        </label>
        </ListItem>
  </List>
  )
}
