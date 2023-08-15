import React, { useState, useEffect } from 'react';
import richardImg from '../../assets/richard.svg';
import thompsonImg from '../../assets/thompson.svg';
import morganImg from '../../assets/morgan.svg';
import pateImg from '../../assets/Pate.svg';
import carterImg from '../../assets/carter.svg';
import andersonImg from '../../assets/anderson.svg';
import incentiveImg from '../../assets/incentives.png';
import updateImg from '../../assets/updates.svg';
import padlockImg from '../../assets/padlocks.svg';
import Navbar from '../../components/navbar/Navbar';
import rhinotwo from "../../assets/rhinotwo.png";
import hornImage from "../../assets/hornImage.svg";
import Subfooter from '../../components/subfooter/Subfooter';
import {Link} from 'react-router-dom';




const teamMemberDatas = [
  { image: richardImg, fullname: "Dr. Olivia Richards", skill: 'Conservation Scientist', description: " Dr. Richards holds a Ph.D. in Conservation Biology and has extensive experience in wildlife research and habitat management. As a key team member, she oversees the scientific aspects of the project, conducts research, and provides valuable insights for effective conservation strategies." },
  { image: thompsonImg, fullname: "Mark Thompson", skill: 'Security Specialist', description: "With a background in law enforcement and wildlife protection, Mark brings his expertise in security operations to HornShield. He designs and implements anti-poaching measures, coordinates surveillance systems, and trains ranger teams to ensure the safety of black rhinos." },
  { image: morganImg, name: "Sarah Morgan", skill: 'Community Engagement Coordinator', description: "Sarah has a background in community development and conservation education. She works closely with local communities, building strong relationships, and implementing outreach programs that foster understanding, support, and collaboration in rhino conservation efforts." },
  { image: pateImg, fullname: "Dr. Michael Pate", skill: 'Habitat Restoration Ecologist', description: "Dr. Patel is an experienced ecologist specializing in habitat restoration. With his expertise in ecosystem management, he leads the habitat restoration efforts for black rhinos. Dr. Patel designs and implements restoration projects, conducts ecological assessments, and monitors the progress of habitat recovery." },
  { image: carterImg, fullname: "Anna Carter", skill: 'Project Manager', description: "Anna is responsible for overall project coordination and management. With a background in project management and conservation initiatives, she ensures smooth operations, oversees budgeting, and facilitates effective communication among team members, stakeholders, and donors." },
  { image: andersonImg, fullname: "James Anderson", skill: 'Finance and Fundraising Officer', description: "James brings financial expertise to the team, managing budget allocations, financial reporting, and fundraising efforts. With experience in non-profit finance management, he ensures transparent and accountable use of funds for the HornShield project." },
]

const ProjectDetails = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [projects, setProjects] = useState([]);



  useEffect(() => {
    if (selectedTab === 'overview') {
      setProjects([<ProjectOverview1  />]);
    } else if (selectedTab === 'community') {
      setProjects([<Community />]);
    } else if (selectedTab === 'reward') {
      setProjects([<RewardIncentives />]);
    } else if (selectedTab === 'team') {
      setProjects([<TeamMembers />]);
    } else if (selectedTab === 'update') {
      setProjects([<Updates />]);
    } else if (selectedTab === 'security') {
      setProjects([<Security />]);
    } else if (selectedTab === 'contact') {
      setProjects([<ContactInfo />]);
    }
  }, [selectedTab]);


  return (
    <>
      <main className='bg-[#1A1818]'>
        <section className='w-[90%] md:w-[80%] mx-auto py-10'>
         <Navbar/>
         <div class="flex flex-col md:flex-col justify-center">
         <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-white">
          Hornshield
          </h1>
          <div class="flex items-stretch md:items-center p-8">
         <img src={rhinotwo} alt="rhinotwo" marginBottom="2rem"/>
         </div>
         </div>
          <div className='py-2 mb-3 border md:text-start text-center w-full md:flex md:justify-between'>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('overview');
            }}
            class={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200  inline-flex items-center leading-none ${
              selectedTab === 'overview' ? `py-3 px-5 font-bold text-white` : 'border-gray-200'
            } tracking-wider`}
          >
            Project Overview
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('team');
            }}
            className={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200 inline-flex items-center leading-none ${
              selectedTab === 'team' ? `py-3 px-5 font-bold text-white` : 'border-gray-200'
            } tracking-wider`}
          >
            Team Members
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('reward');
            }}
            className={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200 inline-flex items-center leading-none ${
              selectedTab === 'reward' ? `py-3 px-5 font-bold text-white` : 'border-gray-200'
            } tracking-wider`}
          >
            Reward/Incentives
          </a>          
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('contact');
            }}
            className={`sm:px-6 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200  inline-flex items-center leading-none ${
              selectedTab === 'contact' ? `py-3 px-5 font-bold text-white` : 'border-gray-200'
            } tracking-wider`}
          >
            Contact Information
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('community');
            }}
            className={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200 inline-flex items-center leading-none ${
              selectedTab === 'community' ? `py-3 px-5 font-bold text-white` : 'border-gray-200'
            } tracking-wider`}
          >
            Community
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('update');
            }}
            className={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200  inline-flex items-center leading-none ${
              selectedTab === 'update' ? `py-3 px-5 font-bold text-white` : 'border-gray-200'
            } tracking-wider`}
          >
            Updates
          </a>
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setSelectedTab('security');
            }}
            className={`sm:px-4 py-3 sm:w-auto justify-center sm:justify-start title-font text-gray-200 inline-flex items-center leading-none ${
              selectedTab === 'security' ? `py-3 px-5 font-bold text-white` : 'border-gray-200'
            } tracking-wider`}
          >
            Security
          </a>
          </div>

          {projects.map((project, index) => (
            <div key={index} class="w-full mt-2">
              {project}
            </div>
          ))}
          <div class="flex flex-col md:flex-row justify-center">
          <Subfooter/>
         </div>
        </section>
          
      </main>

    </>
  )
}

export default ProjectDetails

export const ProjectOverview1= () => {
  return (
    <>
      <section  className='md:flex md:justify-between md:py-2 h-full'>
        <div className='w-full md:w-[45%] md:h-[50vh] h-full rounded-lg border'>
          <img
            src={hornImage}
            className='object-cover mb-10 h-full w-full object-center rounded-lg'
            quality={100}
            alt='m1'
            />

            <div className='border rounded-md h-80'>
              <div className='border-b flex items-center justify-between px-3 h-16 bg-gradient-to-r from-zinc-500 to-zinc-600'>
                <div className='flex'>
                  <svg className='mr-5' width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  <h3 className='text-white font-semibold'>Donor</h3>
                </div>
              
                  <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#ffffff"></path> </g></svg>

              </div>
              <div className='border-b flex items-center justify-between px-3 md:h-16'>
                <div className='flex w-[60%] items-center '>
                  <img alt="" className="w-10 h-10 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?1" />
                  <p className='text-white font-semibold'>Wade Warren <span className='font-light text-sm'>Donated</span> <br /> <span className='font-light text-sm'>Today; 8:00am</span></p>
                </div>
                <p className='text-white'>1.825ETH</p>
              </div>
              
              <div className='border-b flex items-center justify-between px-3 h-16'>
                <div className='flex w-[60%] items-center '>
                  <img alt="" className="w-10 h-10 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?4" />
                  <p className='text-white font-semibold'>Wade Warren <span className='font-light text-sm'>Donated</span> <br /> <span className='font-light text-sm'>Today; 8:00am</span></p>
                </div>
                <p className='text-white'>1.825ETH</p>
              </div>

              <div className='border-b flex items-center justify-between px-3 h-16'>
                <div className='flex w-[60%] items-center '>
                  <img alt="" className="w-10 h-10 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?2" />
                  <p className='text-white font-semibold'>Wade Warren <span className='font-light text-sm'>Donated</span> <br /> <span className='font-light text-sm'>Today; 8:00am</span></p>
                </div>
                <p className='text-white'>1.825ETH</p>
              </div>

              <div className='border-b flex items-center justify-between px-3 h-16'>
                <div className='flex w-[60%] items-center '>
                  <img alt="" className="w-10 h-10 mr-2 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?3" />
                  <p className='text-white font-semibold'>Wade Warren <span className='font-light text-sm'>Donated</span> <br /> <span className='font-light text-sm'>Today; 8:00am</span></p>
                </div>
                <p className='text-white'>1.825ETH</p>
              </div>

            </div>
        </div>

        <div className='md:w-[45%] w-full text-white md:mt-0 mt-5'>
          <div>
            <h2 className='text-lg md:text-xl font-bold text-white'>HornShield</h2>
            <p className='text-sm mb-3'>Project overview</p>
            <p className='mb-3'>
              HornShield is a dedicated initiative aimed at safeguarding black rhinos 
              from the threats of poaching and habitat loss. The project employs a 
              two-fold approach, focusing on implementing robust security measures and 
              supporting habitat restoration efforts. By combining these strategies, 
              HornShield aims to ensure the long-term survival and well-being of black 
              rhino populations.
            </p>

            <div className='border rounded-md p-5 backdrop-blur-lg bg-gradient-to-r from-zinc-500 to-zinc-600'>
              <div className='flex justify-between mb-3'>
                  
                <div>
                  <h3 className='font-bold'>Estimated Amount</h3>
                  <p>5,000 USDT</p>
                </div>

                <div>
                  <h3 className='font-bold'>Amount Raised</h3>
                  <p>3,825 USDT</p>
                </div>
              </div>

              <div className='flex justify-center w-full'>
               <Link to='/donate'><button className='text-white font-bold w-full bg-orange-300 rounded-lg py-3 px-10'>Donate</button></Link> 
              </div>

            </div>
          </div>


          <h2 className='inter-font text-lg md:text-xl font-bold mb-4'>
            Protection Measures:
          </h2>
          <ul className='mb-10 pl-10'>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Enhanced Security: </span>HornShield works to establish and strengthen security measures, including anti-poaching patrols, surveillance systems, and ranger training programs. These measures aim to deter poachers and protect black rhinos from illegal hunting.
            </li>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Community Engagement: </span>The project recognizes the vital role of local communities in rhino conservation. HornShield fosters partnerships with communities living near rhino habitats, promoting awareness, education, and economic opportunities that incentivize the protection of black rhinos.
            </li>
          </ul>

          <h2 className='inter-font text-lg md:text-xl font-bold mb-4'>
            Habitat Restoration:
          </h2>
          <ul className='pl-10'>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Ecosystem Preservation: </span>HornShield focuses on restoring and preserving the natural habitats of black rhinos. This involves initiatives such as reforestation, invasive species management, and habitat connectivity enhancements to create sustainable environments for rhinos to thrive.
            </li>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Conservation Research: </span>The project invests in scientific research to better understand the ecological needs of black rhinos. This knowledge informs habitat restoration efforts and ensures the conservation strategies implemented align with the specific requirements of the species.
            </li>
          </ul>
        </div>
        
      </section>
    </>
  )
};

export const Community = () => {
  return (
    <>
      <section className='community py-10 md:h-[80vh]'>
        <div className="flex justify-between">
          <div className='w-3/5'>
            <h1  className='text-white font-bold text-xl mb-5'>Community</h1>
            <div className='pb-5'>
              <h3 className='text-white font-bold pb-2'>Wildlife Conservation Alliance</h3>
              <p className='text-white'>
                A community dedicated to supporting wildlife conservation initiatives globally.
                Donors can join this community to connect with like-minded individuals, share
                knowledge, and contribute to various conservation projects.
              </p>
            </div>

            <div className='pb-5'>
              <h3 className='text-white font-bold pb-2'>Wildlife Conservation Alliance</h3>
              <p className='text-white'>
                A community that spans across various conservation efforts, the Global
                Conservation Society allows donors to support a wide range of conservation 
                projects worldwide. Members can connect with conservationists, participate in 
                fundraising drives, and contribute to the protection of endangered species and 
                their habitats.
              </p>
            </div>

            <div className='pb-5'>
              <h3 className='text-white font-bold pb-2'>Wildlife Conservation Alliance</h3>
              <p className='text-white'>
                Specifically focused on rhino conservation, this community brings together 
                donors passionate about protecting rhinos from poaching and habitat loss.
                Members can collaborate, participate in fundraising campaigns, and stay 
                updated on the latest developments in rhino conservation.
              </p>
            </div>
          </div>

          <div className='w-[15%] flex items-start justify-between flex-col'>
            <h1 className='text-xl font-bold text-white mb-3'>Category</h1>
            <h2 className='text-lg font-bold text-white'>Enthusiasts</h2>
            <h2 className='text-lg font-bold text-white'>Global</h2>
            <h2 className='text-lg font-bold text-white'>Network</h2>

          </div>

          <div className='w-[15%] flex items-end justify-between flex-col'>
            <h1 className='text-xl font-bold text-white mb-3'>Users</h1>

            <div className="flex flex-col items-center justify-center">
              <div className="flex -space-x-4">
                <img alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?1" />
                <img alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?2" />
                <img alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?3" />
                <span className="flex items-center justify-center w-10 h-10 font-semibold border rounded-full dark:bg-gray-900 text-white border-gray-300">+3</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex -space-x-4">
                <img alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?1" />
                <img alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?2" />
                <img alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?3" />
                <span className="flex items-center justify-center w-10 h-10 font-semibold border rounded-full dark:bg-gray-900 text-white border-gray-300">+8</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="flex -space-x-4">
                <img alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?1" />
                <img alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?2" />
                <img alt="" className="w-10 h-10 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?3" />
                <span className="flex items-center justify-center w-10 h-10 font-semibold border rounded-full dark:bg-gray-900 text-white border-gray-300">+15</span>
              </div>
            </div>
          </div>

        </div>

      </section>

    </>
  )
};

export const RewardIncentives= () => {
  return (
    <>
      <section  className='md:flex md:justify-between md:py-2 h-full mx-auto w-[95%] md:w-full md:h-screen'>
        <div className='w-full md:w-[35%] md:h-[50vh] h-full mb-5 rounded-lg border'>
          <img
            src={incentiveImg}
            className=' object-contain md:object-cover h-full w-full object-center rounded-lg'
            quality={100}
            alt='m1'
            />
        </div>
        <div className='md:w-[60%] w-full text-white'>
          <h2 className='inter-font text-lg md:text-xl font-bold mb-4'>
            The following are the updates donors should take note of
          </h2>
          <ul className=''>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Equity: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non minima dolorum dolorem odio facere! Blanditiis debitis incidunt corporis eius. Animi, sit quod nesciunt nulla voluptates illo explicabo numquam expedita rem!
            </li>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Early Access to Products: </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, et. Commodi molestiae nostrum architecto sequi cum, tempora similique esse optio qui consequuntur, obcaecati deserunt quis unde doloremque? Ipsa, similique autem.
            </li>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Discounts on Products or Services:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet neque omnis adipisci quisquam blanditiis quam? Commodi ducimus quasi, id sapiente repudiandae unde doloremque tenetur quos inventore natus ullam aliquid quia?
            </li>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Exclusive Events or Access: </span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi temporibus deleniti sapiente id delectus, et quo cum ratione voluptate molestias! Enim nisi cum ipsum, iusto fugiat laboriosam accusamus impedit nobis?
            </li>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Recognition and Branding: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id tempore quaerat ipsum minus deserunt excepturi error, omnis natus architecto, veritatis provident labore! Voluptatem, animi odit? Corporis numquam placeat excepturi.
            </li>
          </ul>
        </div>
      </section>
    </>
  )
};

export const Updates= () => {
  return (
    <>
      <section  className='md:flex md:justify-between md:py-2 md:h-screen h-full'>
        <div className='w-full md:w-[35%] h-[50vh] mb-5 rounded-lg border'>
          <img
            src={updateImg}
            className='object-cover h-full w-full object-center rounded-lg'
            quality={100}
            alt='m1'
            />
        </div>
        <div className='md:w-[60%] w-full text-white'>
          <h2 className='inter-font text-lg md:text-xl font-bold mb-4'>
            The following are the updates donors should take note of
          </h2>
          <ul className='text-gray-300'>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Project Milestones: </span>We are thrilled to share that our wildlife conservation funding project has reached significant milestones. With the support of our generous donors, we have successfully launched multiple initiatives aimed at protecting endangered species, preserving habitats, and combating poaching. Stay tuned for updates on the progress and impact of these projects.
            </li>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Increased Impact: </span>Thanks to the continued support from our investors, we have been able to expand our reach and make a more substantial impact in the field of wildlife conservation. The funds raised have contributed to increased anti-poaching efforts, habitat restoration projects, and community engagement programs, creating a positive ripple effect in protecting vulnerable wildlife populations.
            </li>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Transparency and Accountability: </span>As part of our commitment to transparency, we have implemented robust reporting mechanisms that allow investors to track and verify the utilization of their funds. Our comprehensive reports provide insights into the specific conservation projects supported, the resources allocated, and the outcomes achieved. We believe in accountability and ensuring that every donation makes a tangible difference.
            </li>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Collaboration and Partnerships: </span>We are actively forging partnerships with local communities, conservation organizations, and government entities to maximize the impact of our projects. By leveraging collective expertise and resources, we aim to create sustainable, long-term solutions for wildlife conservation. Investors can take pride in being part of a collaborative effort that brings together diverse stakeholders for a common cause.
            </li>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Ongoing Opportunities: </span>Our platform continues to offer exciting opportunities for investors to contribute and make a difference. From targeted funding campaigns for specific endangered species to innovative conservation initiatives, we are constantly exploring new avenues to address the pressing challenges faced by wildlife. Investors can stay engaged by exploring these opportunities and joining us in our mission to safeguard biodiversity.

            </li>
          </ul>
          <button className='text-white font-bold bg-orange-300 rounded-lg py-3 px-10'>Edit or add new update</button>
        </div>
        
      </section>
    </>
  )
};

export const Security= () => {
  return (
    <>
      <section  className='md:flex md:justify-between md:py-2 h-full md:h-screen'>
        <div className='w-full md:w-[35%] h-[50vh] mb-5 rounded-lg border'>
          <img
            src={padlockImg}
            className='object-cover h-full w-full object-center rounded-lg'
            quality={100}
            alt='m1'
            />
        </div>
        <div className='md:w-[60%] w-full text-white'>
          <h2 className='inter-font text-lg md:text-xl font-bold mb-4'>
            To ensure the security of the wildlife conservation project, the following measures can be implemented:
          </h2>
          <ul className='mb-5 text-gray-300'>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Anti-Poaching Patrols: </span>Establish regular patrols in key wildlife areas to deter poachers. Trained and equipped ranger teams can conduct surveillance, monitor wildlife movement, and promptly respond to any suspicious activities.
            </li>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Technology-Based Solutions: </span>Utilize advanced technologies such as camera traps, drones, and sensor networks to enhance surveillance and detection capabilities. These tools can help monitor wildlife, identify potential threats, and provide real-time data for effective decision-making.
            </li>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Community Involvement: </span>Engage local communities living near conservation areas by involving them in wildlife protection efforts. Foster positive relationships, provide education on the value of wildlife, and create economic opportunities that incentivize community support for conservation
            </li>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Intelligence Networks: </span>Establish partnerships with law enforcement agencies, intelligence networks, and wildlife crime units to share information and coordinate efforts to combat poaching. Collaborate with local authorities to ensure effective enforcement of anti-poaching laws.
            </li>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Wildlife Crime Investigation: </span>Set up a dedicated team of wildlife crime investigators to gather intelligence, conduct investigations, and prosecute individuals involved in wildlife trafficking. This can act as a deterrent and help dismantle poaching networks.
            </li>
            <li className='mb-3 text-base list-disc'>
              <span className='font-bold'>Collaboration with Technology Companies: </span>Partner with technology companies specializing in wildlife protection to develop innovative solutions such as AI-powered surveillance systems, data analytics, and early warning systems for enhanced security.
            </li>
          </ul>
          <button className='text-white font-bold bg-orange-300 rounded-lg py-3 px-10'>Edit or add new security measures</button>
        </div>
        
      </section>
    </>
  )
};


export const TeamMembers= () => {
  return (
    <>
       {/* <section className='w-[90%] md:w-[80%] mx-auto py-10'> */}
       <div className='content-details py-10 flex justify-between flex-wrap'>

        {teamMemberDatas.map((teamMemberData, index) => (
              <div key={index} className='content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg'>
              <div className='w-full rounded-lg md:h-[30vh] h-full border-2'>
                <img src={teamMemberData.image} alt="teamImage" className='object-cover h-full w-full object-center rounded-lg' />
              </div>
              <div className='w-full h-1/2 pb-5 p-2 shadow-md'>
                <h3 className='font-bold text-white text-lg'>Name: {teamMemberData.fullname}</h3>
                <h3 className='font-bold text-white text-lg'>Skill or Role: {teamMemberData.skill}</h3>
                <p className='font-bold text-white text-lg'>Brief Description: <br /> 
                  <p className='font-normal text-base text-justify'>{teamMemberData.description}</p> 
                </p>
    
              </div>
            </div> 
            ))}

        {/* <div className='content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg'>
          <div className='w-full rounded-lg h-[30vh] border-2'>
          <img
            src={richardImg}
            className='object-cover h-full w-full object-center rounded-lg'
            quality={100}
            alt='m1'
            />
          </div>
          <div className='w-full h-1/2 pb-5 p-2 shadow-md'>
            <h3 className='font-bold text-white text-lg'>Name:</h3>
            <h3 className='font-bold text-white text-lg'>Skill or Role: </h3>
            <p className='font-bold text-white text-lg'>Brief Description: <br /> 
            <p className='font-normal text-base text-justify'>Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Assumenda dolor natus molestiae iste. Quod officia, nam praesentium accusamus nihil, 
            illo recusandae ipsum nemo earum sint ullam voluptatem modi nulla tempore. Hic laudantium sint dolor 
            </p> 
            </p>

          </div>
        </div>
        </div> */}

        </div>

      {/* </section> */}
    </>
  )
};

export const ContactInfo = () => {
  return (
    <>
      <section className='contactus py-5 md:h-[80vh] md:flex md:justify-between'>

        <div className='md:w-1/2 pr-8 mb-5 text-gray-200'>
          <h2 className='text-lg md:text-xl font-bold text-white mb-2'>Contact Information</h2>

          <p className='mb-5 text-lg'>Fill up this form and our team will get back to you within 24 hours.</p>

          <p className='flex w-full items-center mb-5'><span className='mr-1'>
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9 16C2.814 9.813 3.11 5.134 5.94 3.012l.627-.467a1.483 1.483 0 0 1 2.1.353l1.579 2.272a1.5 1.5 0 0 1-.25 1.99L8.476 8.474c-.38.329-.566.828-.395 1.301.316.88 1.083 2.433 2.897 4.246 1.814 1.814 3.366 2.581 4.246 2.898.474.17.973-.015 1.302-.396l1.314-1.518a1.5 1.5 0 0 1 1.99-.25l2.276 1.58a1.48 1.48 0 0 1 .354 2.096l-.47.633C19.869 21.892 15.188 22.187 9 16z" fill="#FB923C"></path></g></svg>
            </span> <span className='text-lg'> (217) 555-0113</span></p>

          <p className='flex w-full items-center mb-5'><span className='mr-1'>
          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Communication / Mail"> <path id="Vector" d="M4 6L10.1076 10.6123L10.1097 10.614C10.7878 11.1113 11.1271 11.3601 11.4988 11.4562C11.8272 11.5412 12.1725 11.5412 12.501 11.4562C12.8729 11.36 13.2132 11.1105 13.8926 10.6123C13.8926 10.6123 17.8101 7.60594 20 6M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8036C21 16.9215 21 17.4805 20.7822 17.9079C20.5905 18.2842 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2842 3.21799 17.9079C3 17.4801 3 16.9203 3 15.8002Z" stroke="#FB923C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
            </span> <span className='text-lg'> hornshield@gmail.com</span></p>

          <p className='flex w-full items-center mb-5'><span className='mr-1'>
            <svg fill="#FB923C" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="1"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path> </g></svg>
            </span> <span className='text-lg'> 2464 Royal Ln. Mesa, New Jersey 45463</span>
          </p>

          <div className="flex items-center space-x-4 sm:mt-0">
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                <circle cx="15" cy="15" r="4" />
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
              </svg>
            </a>
            <a
              href="/"
              className="text-white transition-colors duration-300 hover:text-teal-accent-400"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6">
                <path d="M23.8,7.2c0,0-0.2-1.7-1-2.4c-0.9-1-1.9-1-2.4-1C17,3.6,12,3.6,12,3.6h0c0,0-5,0-8.4,0.2 c-0.5,0.1-1.5,0.1-2.4,1c-0.7,0.7-1,2.4-1,2.4S0,9.1,0,11.1v1.8c0,1.9,0.2,3.9,0.2,3.9s0.2,1.7,1,2.4c0.9,1,2.1,0.9,2.6,1 c1.9,0.2,8.2,0.2,8.2,0.2s5,0,8.4-0.3c0.5-0.1,1.5-0.1,2.4-1c0.7-0.7,1-2.4,1-2.4s0.2-1.9,0.2-3.9v-1.8C24,9.1,23.8,7.2,23.8,7.2z M9.5,15.1l0-6.7l6.5,3.4L9.5,15.1z" />
              </svg>
            </a>
          </div>
        </div>

        <div className='md:w-1/2'>
        <form action="" className="space-y-4">
          <div className="space-y-4">
            <h2 className='text-lg md:text-xl font-bold text-gray-200'>Contact HornShield Project Administrators</h2>
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-bold text-white">Email Address</label>
              <input type="email" name="email"  placeholder="Enter Email Address" className=" w-full p-2 border rounded-lg bg-transparent focus:outline-none pl-4 " />
            </div>

            <div className="space-y-1">
              <label htmlFor="name" className="block text-sm font-bold text-white">Name</label>
              <input type="text" name="text" placeholder="Enter Full Name" className="w-full p-2 border rounded-lg bg-transparent focus:outline-none pl-4" />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="block text-sm font-bold text-white">Message</label>
              <textarea type="text" name="message" rows={5} cols={10} placeholder="Enter the details of your information here" className="w-full bg-transparent p-2 border rounded-lg focus:outline-none pl-4 resize-none " />
            </div>

            <div className='pt-2'>
            <button type="button" className="md:w-[60%] w-full px-8 py-2 font-semibold rounded-lg bg-orange-400 text-white">Send message</button>
            </div>
            
          </div>
        </form>
        </div>

        </section>
    </>
  )
};
