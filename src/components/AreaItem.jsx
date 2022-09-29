import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const AREA_IMG = 'https://raw.githubusercontent.com/Learn-At-RocketCamp/project-peteats-2022/dev/src/images/Area.png';

function AreaItem({ item, size }) {
  const { Id, CityName, imageUrl } = item;

  // #REVIEW: something weird
  const isLarge = size !== 'small';

  if (!item) {
    return <h3>LOADING...</h3>;
  }
  /* end of IF(!data) */

  return (
    <>
      {/* {console.log()} */}
      {isLarge ? (
        <li className="col-span-12 flex justify-center sm:col-span-6 lg:col-span-4">
          <Link
            to={`/shops/city/${Id}`}
            className="inline-block rounded-3xl border-4 border-[#DB8C8C] px-6 hover:bg-[#DB8C8C] sm:px-0 md:w-full md:px-2"
          >
            {/* /shops/city/:id */}
            <div className="flex flex-col items-center justify-center py-6">
              <picture className="relative z-10 -mt-[30%] block w-[280px]">
                <img
                  loading="lazy"
                  alt={CityName || 'CityName'}
                  className="h-full w-full rounded-full object-cover object-center shadow-xl"
                  src={AREA_IMG || imageUrl}
                />
              </picture>

              <h3 className="mt-6 text-center text-5xl font-bold leading-snug tracking-tight text-black">
                <code>
                  {Id}
                  _
                </code>
                {CityName}
              </h3>
            </div>
          </Link>
        </li>
      ) : (
        /* end of style-Large */
        <li className="col-span-11 pl-[12%] sm:col-span-6 md:col-span-6 lg:col-span-4">
          <Link
            to="/shops/city"
            className="inline-flex h-[75%] w-full rounded-3xl bg-[#212529] hover:bg-[#DB8C8C]"
          >
            <div className="flex items-center">
              <picture className="relative z-10 -ml-[16%] block w-[120px]">
                <img
                  className="h-full w-full rounded-full object-cover object-center shadow-xl"
                  src={AREA_IMG || imageUrl}
                  alt={CityName || 'CityName'}
                />
              </picture>

              <h3 className="p-4 text-center text-3xl font-bold leading-snug tracking-tight text-white">
                {/* <code>
                  {Id}
                  _
                </code> */}
                {CityName}
              </h3>
            </div>
          </Link>
        </li>
        /* end of style-Small */
      )}
    </>
  );
}
/* end of AreaItem() */

AreaItem.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.number]),
  ).isRequired,

  size: PropTypes.string.isRequired,
};
/* end of AreaItem.propTypes */

export default AreaItem;
