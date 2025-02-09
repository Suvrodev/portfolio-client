import goLink from "@/utils/functions/goLink";
import { TBlog } from "@/utils/types/globalTypes";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Image from "next/image";
interface IProps {
  blog: TBlog;
}

const BlogBox = ({ blog }: IProps) => {
  const { image, title, url, date } = blog;
  return (
    <div className="border p-5 rounded-lg w-full md:w-[300px] bg-[#202226] shadow-lg shadow-slate-500 h-[400px] relative">
      <Image
        src={image}
        alt="Image description"
        width={500}
        height={220}
        className="w-full h-[220px]"
      />

      <h1 className="text-xl text-center  font-bold my-5 text-white">
        {title}
      </h1>
      <div className=" absolute bottom-[20px] px-5 w-full left-0">
        <div className="flex justify-between items-center">
          <p className="text-white flex items-center gap-2">
            <span>
              <CalendarMonthIcon />
            </span>{" "}
            <span>{date}</span>
          </p>
          <p
            className="font-bold text-[#FF014F] cursor-pointer"
            onClick={() => goLink(url)}
          >
            Read More
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;
