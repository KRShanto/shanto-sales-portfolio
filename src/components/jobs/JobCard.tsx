"use client";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Globe } from "lucide-react";
import { FaClock, FaLaptopCode } from "react-icons/fa";
import { JobListing } from "@/types/jobs";
import Link from "next/link";

interface JobCardProps {
  listing: JobListing;
  index: number;
}

const JobCard: React.FC<JobCardProps> = ({ listing, index }) => {
  return (
    <CardContainer key={index} containerClassName="-my-16">
      <CardBody className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.2,
            type: "spring",
            stiffness: 100,
          }}
        >
          <Link href={listing.href}>
            <CardItem
              className="flex cursor-pointer flex-col gap-3 rounded-lg bg-black p-5 shadow shadow-white transition-all duration-300"
              translateZ={50}
            >
              <h2 className="text-3xl font-bold text-white">{listing.title}</h2>

              <Image
                src={listing.image}
                alt={listing.title}
                width={200}
                height={200}
                className="mx-auto"
              />

              <div className="flex items-center gap-2 text-gray-400">
                <FaLaptopCode size={20} />
                <p>{listing.company}</p>
              </div>
              <p className="text-gray-300">{listing.description}</p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2 rounded-full border border-gray-600 p-2 text-gray-400">
                  <FaClock size={20} />
                  <p>{listing.type}</p>
                </div>

                <div className="flex items-center gap-2 text-gray-400">
                  <Globe size={20} />
                  <p>{listing.location}</p>
                </div>
              </div>
            </CardItem>
          </Link>
        </motion.div>
      </CardBody>
    </CardContainer>
  );
};

export default JobCard;
