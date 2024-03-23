import React from "react";
import "./benefits.css";
import CardComponent from "../CardComponent/CardComponent";

const Benefits = () => {
  return (
    <div>
      <div class="section1 title-text">
        <h1><center>Why IEEE AlexSB?</center></h1>
        <h3><center>How joining and participating is seamless.</center></h3>
        <div class="flex-container">
        <CardComponent
          title="Step 1: Sign Up Easily"
          description="Create an account with just a few clicks to start your journey."
          image="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL3Jhd3BpeGVsb2ZmaWNlMTVfY2xvc2UtdXBfcGhvdG9fb2ZfYV9tYW5faGFuZF9jaGVja2luZ19hY2NvdW50c19mYjM4YmJiYi0xZWZiLTQ3YTItYmYxZi0wM2VmZjZmNWVmNTZfMS5qcGc.jpg"
        />
        <CardComponent
          title="Step 2: Discover Activities"
          description="Browse a catalog of events and join these that intrigue you."
          image="https://assets-global.website-files.com/611648b6262a801811180f6c/638e2a3491dfa730752a0a97_team-building-activities-main-image.jpg"
        />
        <CardComponent
          title="Step 3: Build Connections"
          description="Meet peer, share experiences, and grow your network."
          image="https://images.spiceworks.com/wp-content/uploads/2021/12/14212019/effective_communication_in_the_workplace_5ce290ac1c679.jpg"
        />
        </div>
      </div>
      <div class="flex-container section2">
        <div class="title-table">
          <div class="title-cell title-text">
            <h1>Student Benefits</h1>
            <h3>Why involvement matters?</h3>
          </div>
        </div>
        <CardComponent
          title="Skills Development"
          description="Gain valuable life and professional skills outside the classroom."
          image="https://static.vecteezy.com/system/resources/previews/001/266/740/non_2x/two-people-working-on-laptops-in-an-office-free-photo.jpg"
        />
        <CardComponent
          title="Networking Hub"
          description="Connect with peers, alumni, and professionals in various fields."
          image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwbGFwdG9wfGVufDB8fDB8fHww"
        />
      </div>
    </div>
  );
};

export default Benefits;
