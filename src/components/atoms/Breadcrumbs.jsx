import { Link, useLocation } from 'react-router-dom';
import { IoChevronBackOutline } from 'react-icons/io5';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const pathMapping = {
    '/omos': 'Om os',
    '/erhverv/produkter': 'Produkter & services',
    '/privat/checkud': 'Check ud',
    '/privat/findparkering': 'Find parkering',
  };

  const previousPage = () => {
    window.history.back();
  };

  return (
    <div className='flex items-end justify-between w-full px-5 md:px-10 lg:px-20 pb-10'>
      <div
        className='font-h4 flex space-x-2 md:space-x-5'
        onClick={previousPage}>
        <IoChevronBackOutline />
        <p>Tilbage</p>
      </div>
      <nav aria-label='Breadcrumb'>
        <ol className='list-none p-0 inline-flex'>
          <li className='flex items-center'>
            <Link to='/' className='text-gray-300 font-h5 hover:text-gray-400 '>
              Home
            </Link>
            <span className='text-gray-300 font-h5 mx-2'>/</span>
          </li>
          {pathnames.map((name, index) => {
            if (index === 0 && pathnames.length > 1) return null;
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            return (
              <li key={name} className='flex items-center font-h5'>
                {isLast ? (
                  <span className='text-marine-500 bg-marine-50 px-3 pt-0.5 rounded-sm first-letter:uppercase'>
                    {pathMapping[routeTo] || name}
                  </span>
                ) : (
                  <>
                    <Link
                      to={routeTo}
                      className='text-gray-400 hover:text-gray-600'>
                      {name}
                    </Link>
                    <span className='mx-2'>/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
