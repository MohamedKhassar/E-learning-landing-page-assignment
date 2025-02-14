import { CoursesType, DataItem, NavigationType, ReviewType } from "@/types";
import designer from "/public/images/designer.jpg";
import developer from "/public/images/developer.jpg";
import marketing from "/public/images/marketing.jpg";
export const statisticsData: DataItem[] = [
  { name: "Total Courses", value: 250 },
  { name: "Total Instructor", value: 300 },
  { name: "Total Students", value: 35000 },
  { name: "Total Seat", value: 42000 },
];

export const reviews: ReviewType[] = [
  {
    name: "John Doe",
    content:
      "Great course! The content was very informative and well-structured.",
    rating: 5,
  },
  {
    name: "Jane Smith",
    content:
      "Excellent instructors and practical examples. Highly recommended!",
    rating: 4.5,
  },
  {
    name: "Alice Johnson",
    content: "Good course, but some sections could be more detailed.",
    rating: 4,
  },
  {
    name: "Bob Brown",
    content: "The course was okay, but the pace was a bit too fast for me.",
    rating: 3.5,
  },
  {
    name: "Charlie Davis",
    content: "Not what I expected. The content felt outdated.",
    rating: 2,
  },
];

export const courses: CoursesType[] = [
  {
    title: "UI/IX Complete Course: From Ziro to Hero",
    price: 450,
    category: "UX/UI Course",
    textColor: "text-violet-900", // Tailwind text color class
    bgColor: "bg-violet-100", // Tailwind background color class
    image: designer,
    delay: 0.2,
  },
  {
    title: "Master web development from scratch",
    price: 500,
    category: "Web Developing",
    textColor: "text-yellow-900",
    bgColor: "bg-yellow-100",
    image: developer,
    delay: 0.3,
  },
  {
    title: "Marketing Complete Course",
    price: 500,
    category: "Marketing",
    textColor: "text-sky-900",
    bgColor: "bg-sky-100",
    image: marketing,
    delay: 0.4,
  },
];

export const navigationData: NavigationType[] = [
  {
    title: "About",
    links: ["Our Story", "Open Position", "Empower Us", "How It Work", "Blog"],
  },
  {
    title: "Learning",
    links: ["Get App", "Testemorial", "FAQ", "Contact"],
  },
  {
    title: "More",
    links: ["Inbox", "News Press", "Free Personality Test"],
  },
];
