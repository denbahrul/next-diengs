import Link from "next/link";
import { BsArrowLeftShort } from 'react-icons/bs';
import TopNav from "../../top-nav";

export default function HeaderRegister({title}) {
    return (
        <div className=" m-auto w-96">
          <TopNav title={title}/>
        </div>
    )
}