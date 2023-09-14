import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const InShelfTable = ({ inshelf }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>No</th>
          <th className='border border-slate-600 rounded-md'>Book</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Availability
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Shelf No.
          </th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {inshelf.map((inshelf, index) => (
          <tr key={inshelf._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {inshelf.book}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {inshelf.availability}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {inshelf.shelfNo}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/inshelf/details/${inshelf._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/inshelf/edit/${inshelf._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/inshelf/delete/${inshelf._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InShelfTable;