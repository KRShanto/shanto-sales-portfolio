import Image from "next/image";
import React from "react";
import Levant from "../../../../public/companies/levant.png";
import Apply from "./Apply";

export default function Page() {
  return (
    <div className="min-h-screen">
      <div className="flex justify-center gap-5">
        <Image
          src={Levant}
          alt="Levant IT Solution"
          width={300}
          height={200}
          className="rounded-lg bg-white p-5"
        />
        <div>
          <h1 className="text-4xl font-bold">
            Frontend Tester (React & Next.js)
          </h1>
          <div className="mt-5 flex gap-3 text-xl text-neutral-300">
            <h2>Levant IT Solution</h2>
            {" | "}
            <p>Bangladesh (Remote)</p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 flex w-1/2 flex-col gap-3 p-5 text-xl text-gray-300">
        <p>
          Join our team at <strong>Levant IT Solution</strong>, a leading CMMI
          Level 2 IT company that delivers cutting-edge technology solutions for
          businesses. With a strong focus on quality and innovation, we create
          impactful digital experiences, including websites, applications,
          e-commerce solutions, and ERP systems. Be part of a team where your
          expertise in testing will help shape the future of high-quality
          software solutions!
        </p>

        <h3 className="mt-5 text-2xl font-bold">Key Responsibilities:</h3>
        <ul className="ml-5 mt-2 list-disc">
          <li>
            Develop, execute, and maintain <strong>unit tests</strong> for React
            and Next.js applications using frameworks like <strong>Jest</strong>{" "}
            or <strong>Mocha</strong>.
          </li>
          <li>
            Perform <strong>integration testing</strong> with tools such as{" "}
            <strong>React Testing Library</strong>, <strong>Cypress</strong>, or{" "}
            <strong>Playwright</strong>.
          </li>
          <li>
            Conduct <strong>end-to-end testing</strong> for web applications to
            ensure seamless user experiences across all devices and browsers.
          </li>
          <li>Create and execute test plans, test cases, and test scripts.</li>
          <li>
            Identify, document, and track bugs using tools like{" "}
            <strong>JIRA</strong> or similar platforms.
          </li>
          <li>
            Collaborate closely with developers to ensure issues are resolved
            efficiently.
          </li>
          <li>
            Monitor and improve application performance, reliability, and
            scalability through testing.
          </li>
          <li>
            Contribute to the continuous improvement of testing frameworks and
            practices.
          </li>
        </ul>

        <h3 className="mt-5 text-2xl font-bold">What We’re Looking For:</h3>
        <ul className="ml-5 mt-2 list-disc">
          <li>
            Strong understanding of{" "}
            <strong>front-end testing methodologies</strong> and tools.
          </li>
          <li>
            Proficiency in <strong>React</strong> and <strong>Next.js</strong>{" "}
            development environments.
          </li>
          <li>
            Hands-on experience with <strong>testing frameworks</strong> like{" "}
            <strong>Jest</strong>, <strong>Mocha</strong>,{" "}
            <strong>React Testing Library</strong>, or <strong>Enzyme</strong>.
          </li>
          <li>
            Experience with <strong>end-to-end testing</strong> tools like{" "}
            <strong>Cypress</strong>, <strong>Detox</strong>, or{" "}
            <strong>Appium</strong>.
          </li>
          <li>
            Familiarity with <strong>debugging tools</strong> and browser
            developer tools.
          </li>
          <li>Excellent problem-solving skills and attention to detail.</li>
          <li>
            Ability to work independently and collaboratively within a team.
          </li>
        </ul>

        <h3 className="mt-5 text-2xl font-bold">Bonus Skills:</h3>
        <ul className="ml-5 mt-2 list-disc">
          <li>
            Experience with <strong>TypeScript</strong> in testing environments.
          </li>
          <li>Familiarity with CI/CD pipelines for test automation.</li>
          <li>Knowledge of performance and load testing tools.</li>
          <li>
            Knowledge of any project management software such as{" "}
            <strong>Asana</strong>.
          </li>
        </ul>

        <h3 className="mt-5 text-2xl font-bold">Why Join Us?</h3>
        <ul className="ml-5 mt-2 list-disc">
          <li>Flexible work environment (remote or office).</li>
          <li>Opportunity to work with cutting-edge technologies.</li>
          <li>
            Professional growth and learning opportunities in software testing.
          </li>
          <li>
            A collaborative and supportive team culture that values quality.
          </li>
        </ul>

        <Apply />
      </div>
    </div>
  );
}
