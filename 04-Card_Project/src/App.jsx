import React from "react";
import Card from "./components/Card.jsx";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQZwfIF1UdjlMBtjg4fmlfdGU0suXMgG5qA&s",
      companyName: "Amazon",
      datePosted: "10 days ago",
      post: "Cloud Support Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      datePosted: "1 week ago",
      post: "Backend Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$70/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "4 days ago",
      post: "DevOps Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      companyName: "IBM",
      datePosted: "6 days ago",
      post: "Data Analyst",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$35/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      companyName: "Oracle",
      datePosted: "2 days ago",
      post: "Database Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$60/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://blog.logomaster.ai/hs-fs/hubfs/intel-logo-3.jpg?width=672&height=448&name=intel-logo-3.jpg",
      companyName: "Intel",
      datePosted: "3 days ago",
      post: "Hardware Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$52/hour",
      location: "Mumbai, India",
    },
    {
      brandLogo:
        "https://cdn.worldvectorlogo.com/logos/adobe-acrobat-dc-logo-2020.svg",
      companyName: "Adobe",
      datePosted: "8 days ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$38/hour",
      location: "Mumbai, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              logo={elem.brandLogo}
              company={elem.companyName}
              date={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              sal={elem.pay}
              location={elem.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
