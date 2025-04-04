import React from "react";

function article_1() {
  return {
    date: "2 Sep 2023",
    title: "TP Southern Odisha Distribution Limited as Lead Engineer",
    role: "Full-Stack Development and DevOps",
    description: `At TP Southern Odisha Distribution Limited, I have been leading Full-Stack Development and DevOps initiatives, driving critical updates to a GIS web application that enhanced system reliability by 30% and supported over 1,000 active users weekly. I have designed and deployed containerized microservices using Docker and Kubernetes, streamlining CI/CD pipelines for scalable deployments while optimizing multi-stage Docker builds with virtualized node_modules inside Kubernetes pods. Additionally, I have managed server administration, Kubernetes clusters, and system monitoring, ensuring high availability and performance, while automating system maintenance through cron jobs, including weekly pod cleanups. I have also established best practices for code deployment, security, and cloud infrastructure, providing technical leadership and mentorship in React, NodeJS, and DevOps. Previously, as a Graduate Engineer Trainee, I developed and optimized RESTful APIs and GraphQL endpoints with NodeJS, ExpressJS, and MongoDB/PostgreSQL, reducing query response times by 50%. I built and deployed scalable full-stack applications with ReactJS, NextJS, and Redux Toolkit, integrating React Query for efficient data fetching and caching. My work also included enhancing UI/UX with Material-UI, Tailwind CSS, and Ant Design, implementing secure authentication with JWT, OAuth2, and LDAP, and optimizing performance through React Hook Form, Yup, and memoization techniques. Furthermore, I developed real-time features using WebSockets and Socket io, enabling bidirectional communication, and automated email notifications via Nodemailer and Axios for scheduled Excel reports.`,
    keywords: [
      "The Benefits of Cloud Computing",
      "Mouli",
      "Mouli P",
      "Mouli Panyam",
    ],
    style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
    body: (
      <React.Fragment>
        <div className='article-content'>
          <div className='paragraph'>Content of article 1</div>
          <img
            src='https://picsum.photos/200/300'
            alt='random'
            className='randImage'
          />
        </div>
      </React.Fragment>
    ),
  };
}

function article_2() {
  return {
    date: "7 May 2023",
    title: "Artificial Intelligence in Healthcare",
    description:
      "AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
    style: ``,
    keywords: [
      "Artificial Intelligence in Healthcare",
      "Mouli",
      "Mouli P",
      "Mouli Panyam",
    ],
    body: (
      <React.Fragment>
        <h1>Content of article 2</h1>
      </React.Fragment>
    ),
  };
}

const myArticles = [article_1];

export default myArticles;
