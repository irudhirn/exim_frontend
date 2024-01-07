import React from "react";
import { useState } from "react";

import Job from "./Job/Job";

import classes from "./Jobs.module.css";

const DUMMY_JOBS = [
  {
    id: "j1",
    name: "E-commerce Executive",
    officeLocation: "",
    workLocation:
      "Shubham Complex, 2nd & 3rd floor, Aai Mata Rd, near SMC health center, opp. D R World, Parvat Patiya, Surat, Gujarat 395010",
    timings: "",
    contact: "7600834842",
    salary: "Negotiable",
    desc: [
      "Product listing & promotion on marketplaces.",
      "Manage RTO or Return orders & claim for wrong products.",
      "Manage order processing & update inventory.",
      "Expert in advanced Excel.",
      "Bulk Listing kowledge.",
      "FBA knowledge.",
      "A+ content knowledge.",
      "Analyzing & evaluating the portal's strengths.",
      "Handle Amazon, Flipkart, Ajio, Snapdeal, Search new portal."
    ],
    requirements: [
      "Strong communication skills & IT fluency.",
      "Ability to manage complex projects & multi task.",
      "Excellent organizational skills.",
      "Proficient in MS-Word, MS-Excel, MS-Powerpoint & Outlook.",
      "Comfortable using a computer for various tasks."
    ]
  },
  {
    id: "j2",
    name: "E-Commerce Manager",
    officeLocation: "",
    workLocation:
      "Shubham Complex, 2nd & 3rd floor, Aai Mata Rd, near SMC health center, opp. D R World, Parvat Patiya, Surat, Gujarat 395010",
    timings: "",
    contact: "7600834842",
    salary: "Negotiable",
    desc: [
      "Product listing and promotion on marketplaces.",
      "Manage RTO or Return orders and claim for wrong products.",
      "Manage order processing and update inventory.",
      "Expert In advanced excel.",
      "Bulk Listing Knowledge.",
      "FBA Knowledge.",
      "A+ content knowledge.",
      "Analyzing and evaluating the portal's Strengths.",
      "Handle Amazon, Flipkart, Ajio, Snapdeal, Search New portal."
    ],
    requirements: [
      "Strong communication skills and IT fluency.",
      "Ability to manage complex projects and multi-task.",
      "Excellent organizational skills.",
      "Proficient in Word, Excel, Outlook, and PowerPoint.",
      "Comfortable using a computer for various tasks."
    ]
  },
  {
    id: "j3",
    name: "Graphics Designer",
    officeLocation: "",
    workLocation:
      "Shubham Complex, 2nd & 3rd floor, Aai Mata Rd, near SMC health center, opp. D R World, Parvat Patiya, Surat, Gujarat 395010",
    timings: "",
    contact: "7600834842",
    salary: "Negotiable",
    desc: [
      "Have good knowledge of Adobe Photoshop, CorelDraw, CDR Files and Canva.",
      "Create product catalogues and editing photos and banners.",
      "Create effective designs for digital promotion.",
      "Prepare rough draft and present ideas.",
      "Work with a wide range of media and graphic design software.",
      "Collaborate with fellow designers to develop new approaches for creating more expressive graphics for the company.",
      "Creating a wide ranges of graphics and layouts for product illustrations, company logos and websites with graphics software.",
      "Ensure project are completed with high quality and on schedule.",
      "Collaborate with the vender and design photos, stickers and banner as per requirement."
    ],
    requirements: [
      "Bachelor’s degree in graphic design or related field.",
      "3-5 year experience as a graphics designer or in related field.",
      "Excellent written and verbal communication skill.",
      "Portfolio of work with a wide range of creative projects.",
      "Time management and organizational skill.",
      "Experience with both print and digital media.",
      "Knowledge of layouts, graphics fundamentals, typography, print and web.",
      "Able to give and receive constructive criticism.",
      "Understanding of marketing, website design, advertisements and multimedia design."
    ]
  },
  {
    id: "j4",
    name: "Production Manager",
    officeLocation:
      "Shubham Complex, 2nd & 3rd floor, Aai Mata Rd, near SMC health center, opp. D R World, Parvat Patiya, Surat, Gujarat 395010",
    workLocation:
      "Plot no:150, 2nd & 3rd Floor, Amrut Udhyog Nagar, Near- Diamond Nagar, Laskana , Kamrej, Surat.",
    timings: "",
    contact: "7600434842",
    salary: "Negotiable",
    desc: [
      "Technical knowledge & background in the Cosmetic & Ayurveda, FMCG Industry.",
      "Good Knowledge of Ayurveda and Cosmetic department Manufacturing process.",
      "Knowledge in different categories of Ayurvedic Production like Asava-arista, Ayurvedic medicated oil, Tablets, Pills, Capsules, Syrups, Avaleha, Pak, etc.",
      "To carry out the production of different categories of Ayurvedic and Herbal products.",
      "Knowledge in different categories of Cosmetic Production like Shampoo, Creams, Lip Balm, etc.",
      "To ensure proper Quality Inspection of Raw Materials and report non-concurrence.",
      "Supervises staff to produce manufactured products, and organizes and monitors workflow.",
      "Completes production plan by scheduling and assigning personnel, accomplishing work results, establishing priorities, monitoring progress, revising schedules, resolving problems, and reporting results of the processing flow on Day production summaries",
      "Good Knowledge Of technical Product Quality and Standardization.",
      "Maintains quality service by establishing and enforcing production standards.",
      "Establish daily٫ weekly and monthly objectives and communicate them to employees.",
      "Manage the workflow by assigning responsibilities and preparing schedules.",
      "Guide and coach employees٫ monitoring their productivity.",
      "Oversee safe use of the equipment and schedule regular maintenance.",
      "Perform verification of production output according to specifications.",
      "Strong Observation of Legal Compliance like BMR Certificate, Product Approval & ETC.",
      "To ensure proper liaising with necessary Government Offices vise, Legal Metrology Department, Government Drugs Department, etc.",
      "Ensure Production is followed as per the prescribed formula and GMP guidelines.",
      "To ensure the shop floor is properly maintained as per GMP norms.",
      "Cosmetic, Ayurveda & R&D Department Employee handle, Taking Daily Work report, Task Allotment & proper Guidance.",
      "Working knowledge of different Pharmaceutical machinery, QC.",
      "Strong Grip to Data management, Good command of Excel.",
      " Knowledge of management of Factory Production."
    ],
    requirements: [
      " Who Can Studying His B. Pharm Ayurveda, M. Pharm Ayurveda, B. Tech Cosmetic, M. Tech Cosmetic, M. Sc Micro Biology and Technical Stream."
    ]
  },
  {
    id: "j5",
    name: "Production Officer",
    officeLocation:
      "2nd & 3rd Floor, Subham Complex, Near SMC Health Center, Opp. DR World, Aai Mata Road, Parvat Patiya, Surat – 395010, INDIA",
    workLocation:
      " 150, Amrut Udhyog Nagar, Near- Diamond Nagar, Laskana, Kamrej, Surat.",
    timings: "",
    contact: "7600834842",
    salary: "Negotiable",
    desc: [
      "Development and implementation of R&D stability batches.",
      "Literature Search of various Herbal and nutraceutical formulation.",
      "Execution of Feasibility batches.",
      "New product development (Client base composition, in-house development).",
      "Planning day-to-day manufacturing schedules, raw materials, packing Materials for no stock-out utilities and man power requirement.",
      "Accepting monthly, fortnight basis, weekly or less production targets & completion of targets by analytical productivity method.",
      "Cooperating with R&D personnel.",
      "To maintain Work in process & other manufacturing activities to implement good manufacturing practice.",
      "Furnishing data related to Daily Project Report, Wastage Report, Management Information System & sending it to Top-level Management for compilation.",
      "Accountability to ensure production planning & timely delivery of high productivity and low cost products and with compliance to cGMP.",
      " Responsible to carry out production operation as per production plan and delivery on time."
    ],
    requirements: [
      "Should be a B.Pharma/M.Pharm.",
      "Should be having good interpersonal, team leading and good communication skill.",
      "Documentation (Trial reports, DTM, BOM, MFR, Technology Transfer).",
      "Software (ERP, Oasis LIMS, MS Excel, MS Word, MS PowerPoint).",
      "Handling of Instrument (IR moisture analyzer, Friability apparatus, DT apparatus, hardness tester, Tap density analyzer, Sieve shaker)."
    ]
  },
  {
    id: "j6",
    name: "Purchase Manager",
    officeLocation:
      "- 2nd & 3rd Floor, Subham Complex, Near SMC Health Center, Opp. DR World, Aai Mata Road, Parvat Patiya, Surat - 395010 INDIA",
    workLocation:
      "150, Amrut Udhyog Nagar, Near- Daimond Nagar, Laskana, Kamrej Surat.",
    timings: "09:30am to 07:00pm (Negotiable)",
    contact: "7600834842",
    salary: " 2,16,000 to 5,00,000 PA (Negotiable)",
    desc: [
      "We are in need of a smart & dynamic persona as Purchase Manager responsible for keeping records of vendors, comparative analysis, process PR, negotiating, pricing, taxation, warehousing, distribution & etc.",
      "Collaborate with key persons to ensure clarity of the specifications and expectations of the company.",
      "To get the approval and submit the purchase order to the selected vendor and ensure that the deliver is made by actual date of delivery as accepted.",
      "Communicates with suppliers and to make sure supplies get where they need to be when they need to be, even when a deadline is tight.",
      "You will be maintaining relationships with vendors and operators to supply the company's needs, overseeing inventory of all product, creating and processing invoices, sourcing products, and working with other divisions in the company to ensure needs are met.",
      "Must Experience In B2B Portal. Ex. Indiamart, Just dial, Trade India. Alibaba.",
      "Research potential vendors.",
      "Compare and evaluate offers from suppliers.",
      "Prepared the purchase requisitions, purchase order & rate amendment through Excel Sheet.",
      "Excellent Communication Skill and negation Skill.",
      "Must knowledge About Price bid-Tabulation.",
      "Inventory management for various raw materials. i.e Procurements /Alternate Vendor Development.",
      "Ensure a cost effective supply of quality products.",
      "Track and report key functional metrics to reduce expenses and improve effectiveness.",
      "Negotiate contract terms of agreement and pricing.",
      "Track orders and ensure timely delivery.",
      "Review quality of purchased products.",
      "Enter order details (e.g. vendors, quantities, prices) into internal databases.",
      "Maintain updated records of purchased products, delivery information and invoices.",
      "Prepare reports on purchases, including cost analyses.",
      "Vendor re-structuring & New vendor development as per product & company requirement.",
      "Monitor stock levels and place orders as needed.",
      "Coordinate with warehouse staff to ensure proper storage.",
      "Attend trade shows and exhibitions to stay up-to-date with industry trends.",
      "To achieve the target given by the superiors through key customers and after judicious analysis of the potential to ensure that plans turn into actions through agreed qualitative & quantified actions plans.",
      "Take responsibility for production of weekly, monthly and quarterly reports, as well as relevant business data as instructed by superiors.",
      "Developing and delivering training solutions that meet business needs at PAN India Level.",
      "Maintain All Data In Excel Sheet.",
      "Ability to take initiative and prioritize tasks with exceptional time-management skills.",
      " Achieving reduction in prices and timely delivery of bought out components to company at the right quantity, right quality, at right place and right time so as to ensure timely delivery at customers end."
    ],
    requirements: [
      "Bachelor’s degree in business, marketing or B.sc / M.sc & Pharma related field.",
      "Experience in sales, marketing, Purchase or related field.",
      "Strong communication skills and Ability to manage complex projects and multi-task.",
      "Excellent organizational skills.",
      "Ability to flourish with minimal guidance, be proactive, and handle uncertainty.",
      "Proficient in Word, Excel, Outlook, and PowerPoint.",
      "Comfortable using a computer for various tasks"
    ]
  },
  {
    id: "j7",
    name: "Warehouse Manager",
    officeLocation:
      "2nd & 3rd Floor, Subham Complex, Near SMC Health Center, Opp. DR World, Aai Mata Road, Parvat Patiya, Surat - 395010 INDIA.",
    workLocation: "",
    timings: "",
    contact: "7600834842",
    salary: "Negotiable",
    desc: [
      "Have a clear understanding of the company's policies and vision and how the warehouse contributes to these.",
      "Keep stock control systems up to date and make sure inventories are accurate.",
      "Plan future capacity requirements.",
      "To training Provide to The staff, as well as monitoring staff performance and progress.",
      "Maintain standards of health and safety, hygiene and security in the work environment, for example, ensuring that stock such as Liquids and Sticky(Cigarette) are stored safely.",
      "Where appropriate, oversee the maintenance and operation of warehouse management systems and automated storage and retrieval systems.",
      "Managed daily shipment to customer as per company's quality standards.",
      "Maintained accuracy and integrity of all logistics information.",
      "Managed staff of warehouse for proper functioning provided logistics advice and resolved any shipment problems promptly.",
      "Communicate with Production, supplier and Customer for proper Pipeline.",
      "Strategic planning & inventory Management with Excel Format.",
      "Monitored stock and managing waste.",
      "Properly Maintain Rack management.",
      "Research potential vendors.",
      "Track orders and ensure timely delivery.",
      "Review quality of purchased products.",
      "Enter order details (e.g. vendors, quantities, prices) into internal databases.",
      "Maintain updated records of purchased products, delivery information and invoices.",
      "Prepare reports on purchases, including cost analyses.",
      "Monitor stock levels and place orders as needed.",
      "Coordinate with warehouse staff to ensure proper storage.",
      "Take responsibility for production of weekly, monthly and quarterly reports, as well as relevant business data as instructed by superiors.",
      "Maintain All Data In Excel Sheet.",
      "Ability to take initiative and prioritize tasks with exceptional time management skills."
    ],
    requirements: [
      "Excellent oral and written communication skills.",
      "Numeracy and an understanding of finance for stock management.",
      "People management skills, including the ability to inspire, lead and motivate a team of people, delegate work and explain ideas.",
      "Team working skills.",
      "Planning and organizing skills to effectively manage the flow of stock.",
      "Analytical ability.",
      "Accuracy and attention to detail.",
      "Initiative and decisiveness.",
      "Technical and IT skills, particularly when it comes to database management and spreadsheets.",
      "Problem-solving skills and the ability to work on a tactical and strategic level.",
      "The ability to work un der pressure and to tight deadlines.",
      "A flexible approach to work as many warehouses operate shift patterns"
    ]
  },
  {
    id: "j8",
    name: "Business Development Executive",
    officeLocation: "",
    workLocation:
      "2nd & 3rd Floor, Subham Complex, Near SMC Health Center, Opp. DR World, Aai Mata Road, Parvat Patiya, Surat - 395010",
    timings: "",
    contact: "7383186988",
    salary: "1,80,000/- To 3,00,000/- Per Annum + Incentive",
    desc: [
      "Must Experience In B2B Portal. Ex. Indiamart, Just dial, Trade India. Alibaba.",
      "To achieve the target given by the superiors through key customers and after judicious analysis of the potential to ensure that plans turn into actions through agreed qualitative & quantified actions plans.",
      "Networking & Relationship building - supervise & provide strong support to existing & potential customers in all aspects of developing Concrete to enable retention of customers.",
      "Ensure Sales /collection of sales from targeted markets to generate above market growth and that the net result after costs provides an acceptable level of profit in line with budget.",
      "Achieve & improve market / customer penetration as per plan.",
      "Assume responsibility for sales & marketing of Swosh products to target customers/market as delegated by his superiors & in close co-ordination with the HOD.",
      "Take responsibility for production of weekly, monthly and quarterly reports, as well as relevant business data as instructed by superiors.",
      "Developing and delivering training solutions that meet business needs at PAN India Level.",
      "Selecting and managing resources, including working with both internal employees, technicians and training vendors to develop and deliver training.",
      "Planning and overseeing new marketing initiatives.",
      "Researching organizations and individuals to find new opportunities.",
      "Increasing the value of current customers while attracting new ones.",
      "Finding and developing new markets and improving sales.",
      "Attending conferences, meetings, and industry events.",
      "Developing quotes and proposals for clients.",
      "Researching, planning, and implementing new target market initiatives.",
      "Pursuing leads and moving them through the sales cycle.",
      "Developing goals for the development team and business growth and ensuring they are met.",
      "Training personnel and helping team members develop their skills.",
      "To Provide Tanning by Distributor and make Strategy.",
      "Manage training budget.",
      "Manage Sales & Service teams.",
      "Ability to take initiative and prioritize tasks with exceptional time-management skills."
    ],
    requirements: [
      "Bachelor’s degree in business, marketing or related field.",
      "Experience in sales, marketing or related field.",
      "Strong communication skills and IT fluency.",
      "Ability to manage complex projects and multi-task.",
      "Excellent organizational skills.",
      "Ability to flourish with minimal guidance, be proactive, and handle uncertainty.",
      "Proficient in Word, Excel, Outlook, and PowerPoint.",
      "Comfortable using a computer for various tasks."
    ]
  },
  {
    id: "j9",
    name: "Production Supervisor",
    officeLocation:
      "2nd & 3rd Floor, Subham Complex, Near SMC Health Center, Opp. DR World, Aai Mata Road, Parvat Patiya, Surat - 395010 INDIA.",
    workLocation:
      "Plot no:150, 2nd & 3rd Floor, Amrut Udhyog Nagar, Near- Diamond Nagar, Laskana , Kamrej, Surat.",
    timings: "09:00am – 07:00pm",
    contact: "7600834842",
    salary: "Negotiable",
    desc: [
      "Supervises staff to produce manufactured products, and organizes and monitors workflow.",
      "Completes production plan by scheduling and assigning personnel, accomplishing work results, establishing priorities, monitoring progress, revising schedules, resolving problems, and reporting results of the processing flow on Day production summaries.",
      "Maintains quality service by establishing and enforcing production standards. Establish daily٫ weekly and monthly objectives and communicate them to employees.",
      "Manage the workflow by assigning responsibilities and preparing schedules.",
      "Guide and coach employees٫ monitoring their productivity.",
      "Oversee safe use of equipment and schedule regular maintenance.",
      "Perform verification of production output according to specifications.",
      "Prepare reports on performance and progress and present them to senior managers.",
      "Detect issues in efficiency and suggest improvements.",
      "Consult new employees on how to safely use machinery and follow procedures.",
      "Ensure strict adherence to safety guidelines and company standards."
    ],
    requirements: []
  }
];

const Jobs = () => {
  const [jobs, setJobs] = useState(DUMMY_JOBS);

  return (
    <section>
      <div className={classes.container}>
        <h3 className={classes.title}>Current Openings</h3>
        <ul className={classes.jobs}>
          {jobs.map((job, i) => {
            const {
              id,
              name,
              officeLocation,
              workLocation,
              timings,
              contact,
              salary,
              desc,
              requirements
            } = job;

            return (
              <Job
                key={id}
                name={name}
                officeLocation={officeLocation}
                workLocation={workLocation}
                timings={timings}
                contact={contact}
                salary={salary}
                desc={desc}
                requirements={requirements}
              />
            );
          })}
        </ul>

        <div className={classes.email}>
          <p>
            To apply share your CV at{" "}
            <a href="mailto: hr@eximburg.com">hr@eximburg.com</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
