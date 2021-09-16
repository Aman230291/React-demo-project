import React, { Component } from "react";

import CustomCheckbox from "../Checkbox/Checkbox";

export class Tasks extends Component {
  render() {
    const tasks_title = [
      'Sign contract for "What are conference organizers afraid of?"',
      "Lines From Great Russian Literature? Or E-mails From My Boss?",
      "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroi",
      "Create 4 Invisible User Experiences you Never Knew About",
      'Read "Following makes Medium better"',
      "Unfollow 5 enemies from twitter",
    ];

    var task = [];
    for (var i = 0; i < tasks_title.length; i++) {
      task.push(
        <tr key={i}>
          <td>
            <CustomCheckbox
            
            
            />
          </td>
          <td>{tasks_title[i]}</td>
        </tr>
      );
    }

    return(
        <tbody>{task}</tbody>
    )
    
  }
}
export default Tasks;
