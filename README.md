# Envira

![badge](https://img.shields.io/badge/AWS-EC2-232F3E?style=flat-square&logo=amazon-aws) ![badge](https://img.shields.io/badge/AWS-Cognito-67459B?style=flat-square&logo=amazon-aws) ![badge](https://img.shields.io/badge/AWS-S3-FF9900?style=flat-square&logo=amazon-aws) ![badge](https://img.shields.io/badge/AWS-Lex-00CAFF?style=flat-square&logo=amazon-aws) ![badge](https://img.shields.io/badge/AWS-Polly-00CAFF?style=flat-square&logo=amazon-aws) ![badge](https://img.shields.io/badge/AWS-Amplify-FF9900?style=flat-square&logo=amazon-aws) ![badge](https://img.shields.io/badge/React-.js-61dbfb?style=flat-square&logo=react) ![badge](https://img.shields.io/badge/Node-.js-339933?style=flat-square&logo=node.js) ![badge](https://img.shields.io/badge/My-SQL-4479A1?style=flat-square&logo=mysql) ![badge](https://img.shields.io/badge/Sa-ss-CC6699?style=flat-square&logo=Sass)

![badge](https://img.shields.io/github/repo-size/mariakhantech/envira?style=flat-square)
![badge](https://img.shields.io/badge/License-MIT-green?style=flat-squares)

![badge](https://img.shields.io/github/stars/mariakhantech/envira?style=social) ![badge](https://img.shields.io/github/forks/mariakhantech/envira?style=social)

## Table of Contents

- [Application Description](#project-description)
- [Application Features](#project-features)
- [Technologies](#technologies)
- [Demo](#demo)
- [License](#license)
- [Developer](#developer)
- [Deployed Project Links](#deployed-project-links)

## Application Description:

Utilizing Amazon Web Services, we have created an environmental app using an AI robot (Envira) to interact with users and read information. Envira is designed to have personality, a fun interactive way to deliver climate change data. A user (company or individual) can also create, join, and search environmentally friendly events. The rating system allows a user to determine the best events to attend. These events help to service the community and do our part in preserving our planet. This app also offers information about air quality, EPA and articles related to climate changes. This is a great app for those concerned about climate change and wants to make a difference.

## Application Features:

- User sign-up, login, and authentication using AWS Cognito.
- Interactive and intuitive AI bot to deliver information related to climate change to a user utilizing AWS Lex & AWS Polly.
- Dedicated theme pages for major issues concerning the environment used to inform and educate in unique manner.
- Image upload and retrieval using AWS S3 storage.
- Ability to create and update a profile for a given user.
- Search for events that are created by user that link to full information page related to particular event, and give user ability to attend event.
- Leave comments, ratings, and reviews for events that have occurred.
- Edit/update information to events created by user.
- Additional external resources and data to inform user on pollution information.
- Application is fully deployed and hosted using AWS EC2 and AWS Route 53.

## Technologies

- [MySQL](https://dev.mysql.com/doc/)
- [Sequelize](https://sequelize.org/v5/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Axios](https://www.npmjs.com/package/axios)
- [Sass](https://sass-lang.com/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [Bootstrap](https://getbootstrap.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- [AWS Cognito](https://aws.amazon.com/cognito/)
- [AWS Polly](https://aws.amazon.com/polly/)
- [AWS Lex](https://aws.amazon.com/lex/)
- [AWS S3](https://aws.amazon.com/s3/)
- [AWS EC2](https://aws.amazon.com/ec2/)
- [AWS Route 53](https://aws.amazon.com/route53/)

## Additional Technologies/Resources

- [Unsplash](https://unsplash.com/)
- [Freepik](https://www.freepik.com/)
- [Flaticon](https://www.flaticon.com/)
- [jQuery](https://jquery.com/)
- [Moment.js](https://momentjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [aqicn.org/api/](https://aqicn.org/api/)
- [New York Times API](https://developer.nytimes.com/)
- [EPA Envirofacts](https://www.epa.gov/enviro/widgets)
- [React Reveal](https://www.react-reveal.com/)
- [Global Forest Watch](https://www.globalforestwatch.org/dashboards/global/?category=summary&dashboardPrompts=eyJzaG93UHJvbXB0cyI6dHJ1ZSwicHJvbXB0c1ZpZXdlZCI6W10sInNldHRpbmdzIjp7Im9wZW4iOmZhbHNlLCJzdGVwSW5kZXgiOjAsInN0ZXBzS2V5IjoiIn0sIm9wZW4iOnRydWUsInN0ZXBzS2V5Ijoidmlld05hdGlvbmFsRGFzaGJvYXJkcyJ9&location=WyJnbG9iYWwiXQ%3D%3D&map=eyJjZW50ZXIiOnsibGF0Ijo1My4zODMzMjgzNjc1Njk5LCJsbmciOi0xMTYuNjMwODU5Mzc1MDAxNjh9LCJ6b29tIjoyLjEwNDYyMzM5MjQwODQ5NTYsImNhbkJvdW5kIjpmYWxzZSwiZGF0YXNldHMiOlt7Im9wYWNpdHkiOjAuNywidmlzaWJpbGl0eSI6dHJ1ZSwiZGF0YXNldCI6ImZlOGI1ZjAzLTBmZjktNGMxOC1iYTM5LTc3ZGNmZTY5OTA4ZiIsImxheWVycyI6WyI0MTA4NjU1NC01Y2E1LTQ1NmMtODBkZC1mNmJlZTYxYmM0NWYiXX0seyJkYXRhc2V0IjoiMGIwMjA4YjYtYjQyNC00YjU3LTk4NGYtY2FkZGZhMjViYTIyIiwibGF5ZXJzIjpbImNjMzU0MzJkLTM4ZDctNGEwMy04NzJlLTNhNzFhMmY1NTVmYyIsImI0NTM1MGUzLTVhNzYtNDRjZC1iMGE5LTUwMzhhMGQ4YmZhZSJdLCJib3VuZGFyeSI6dHJ1ZSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZX0seyJkYXRhc2V0IjoiYjU4NDk1NGMtMGQ4ZC00MGM2LTg1OWMtZjNmZGYzYzJjNWRmIiwibGF5ZXJzIjpbIjQ5YTgwZTcwLWVjNTItNGVmOC1iY2M2LWZiMjc3MWQ5NWIyYyJdLCJvcGFjaXR5IjoxLCJ2aXNpYmlsaXR5Ijp0cnVlLCJwYXJhbXMiOnsidGhyZXNoIjozMCwidmlzaWJpbGl0eSI6dHJ1ZX19XX0%3D)


## Demo

![gif1](https://media.giphy.com/media/VDAuv7bMueJSBo4rMc/giphy.gif)

## License

MIT License

Copyright (c) 2020 Maria Khan, Priyanka Singh, Gus Heptig

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Developers

- [_Maria Khan_](https://github.com/MariaKhantech)

- [_Priyanka Singh_](https://github.com/singhpri30)

- [_Gus Heptig_](https://github.com/gheptig)

## Deployed Project Links

GitHub Repository Link

*https://github.com/MariaKhantech/Envira*

Deployed project Link

*https://envira-bot.com/*
