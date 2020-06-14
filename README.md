# TechLink-CAMpung_SCDFXIBM

[![License](https://img.shields.io/badge/License-Apache2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)

## Team TechLink

- **Eugene Fang JunJie** - _Bioengineering and Technology Management, Renaissance Engineering Programme, NTU_
- **Kan Zi Jun** - _Computer Science and Technology Management, Renaissance Engineering Programme, NTU_
- **Lim Jun Quan** - _ownself fill in_
- **Lim Jun Hup** - _ownself fill in_
- **Selina Fang** - _ownself fill in_

## Contents

1. [Short description](#short-description)
1. [Pitch video](#pitch-video)
1. [The architecture](#the-architecture)
1. [Project roadmap](#project-roadmap)
1. [Getting started](#getting-started)
1. [Built with](#built-with)
1. [Acknowledgments](#acknowledgments)

## Short description

### What's the problem?

### How can technology help?

### The idea

### Full pitch deck

You can find our full pitch deck [here](https://docs.google.com/presentation/d/10_5M_DTHn7LGWXVgC4JRWy-gb9XTHm7qAQqwSBHm2k4/edit?usp=sharing)

## Demo video

[![Watch the video]()]()

## The architecture

![architecture]()

1.

## Project roadmap

![Roadmap](roadmap.jpg)

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you can begin, you'll need to sign up for a trial account with Twilio to get the needed credientials as well the the trial number to start sending out messages.

Do contact us for the Watson Assistant keys for access to our model.

### Running on local machine

1. Clone the repo to any folder in your local machine

   ```bash
   git clone https://github.com/kanzijun/TechLink-SolutionName_SCDFXIBM.git
   ```

2. a. To start the frontend

   ```bash
   cd frontend/
   yarn install
   yarn start
   ```

   b. To start the backend

   ```bash
   cd backend/
   ```

   Create a credentials.js file with the following keys

   ```javascript
   module.exports = {
     TWILIO_CREDS: {
       accountSid: ,
       authToken: ,
       trialNumber: ,
       toNumber: ,
     },
     WATSON_ASSISTANT: {
       version: "2020-04-01",
       apiKey: ,
       url: ,
       assistantId: ,
     },
   };
   ```

   Insert your own credentials from the steps in pre-requisite

   Next, In package.json, replace the phone number in twilio-hook script with the trial number from your own Twilio account

   Follow the instructions in [twilio-cli-steps](https://www.twilio.com/docs/sms/quickstart/node#install-the-twilio-cli) to authenticate with your twilio account.

   Afterwards,

   ```bash
   yarn install
   yarn start
   ```

The frontend will be deployed on http://localhost:3000, backend on http://localhost:8080

## Usage

We used the frontend service to simulate a frame from the video stream being processed. The model will determine if the frame has an individual suffering from cardiac arrest and send a notification to the number that your indicated in the credential (of course in the real implementation, it will send to the nearest CFI). The CFI will then be able to converse with the chatbot through the sms service and provide information for our system to make an action (call scdf or false alarm).

## Built with

- [IBM Watson Visual Recognition](https://www.ibm.com/sg-en/cloud/watson-visual-recognition) - The service on the IBM Cloud that enables you to tag, classify and search visual content using machine learning.
- [IBM Watson Assistant](https://www.ibm.com/cloud/watson-assistant/) - The conversation AI platform for chatbot
- [IBM Cloud Foundry](https://www.cloudfoundry.org/) - Deployment of backend service

## Acknowledgments

- SCDF
- IBM
