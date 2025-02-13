import { useEffect, useState } from "react";

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  return (
    <div className='my-16 container mx-auto'>
      {/* Team Header */}
      <div className='text-center px-4 md:px-20 lg:px-80 flex flex-col gap-4 mb-12'>
        <h3 className='text-lg md:text-xl font-bold text-red-500 uppercase tracking-wider'>Our Team</h3>
        <h2 className='text-3xl md:text-5xl font-bold text-slate-800'>Meet Our Experts</h2>
        <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto'>
          The Majority Have Suffered Alteration In Some Form, By Injected
          Humour, Or Randomized Words Which Don&apos;t Look Even Slightly
          Believable.
        </p>
      </div>

      {/* Team Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-12'>
        {team.map((member) => (
          <div
            key={member.id}
            className='group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden'
          >
            <div className='relative'>
              <div className='p-6 bg-base-100'>
                <div className='overflow-hidden rounded-lg'>
                  <img
                    className='h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-110'
                    src={member.image}
                    alt={member.name}
                  />
                </div>
              </div>
            </div>
            <div className='px-6 py-4 text-center'>
              <h3 className='text-2xl font-bold text-slate-800 mb-1 group-hover:text-red-500 transition-colors duration-300'>
                {member.name}
              </h3>
              <p className='text-lg font-semibold text-red-500 mb-4'>
                {member.designation}
              </p>
              <div className='flex justify-center gap-3 mb-4'>
                {/* Social Icons */}
                <a href="#" className="transform hover:-translate-y-1 transition-transform duration-300">
                  <svg className="w-8 h-8 hover:opacity-80" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
                    <path fill='#039be5' d='M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z'></path>
                    <path fill='#fff' d='M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z'></path>
                  </svg>
                </a>
                <a href="#" className="transform hover:-translate-y-1 transition-transform duration-300">
                  <svg className="w-8 h-8 hover:opacity-80" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
                    <path fill='#0288D1' d='M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z'></path>
                    <path fill='#FFF' d='M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z'></path>
                  </svg>
                </a>
                <a href="#" className="transform hover:-translate-y-1 transition-transform duration-300">
                  <svg className="w-8 h-8 hover:opacity-80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <radialGradient id="instagram" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#fd5"/>
                      <stop offset=".328" stopColor="#ff543f"/>
                      <stop offset=".348" stopColor="#fc5245"/>
                      <stop offset=".504" stopColor="#e64771"/>
                      <stop offset=".643" stopColor="#d53e91"/>
                      <stop offset=".761" stopColor="#cc39a4"/>
                      <stop offset=".841" stopColor="#c837ab"/>
                    </radialGradient>
                    <path fill="url(#instagram)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/>
                    <path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/>
                    <circle fill="#fff" cx="31.5" cy="16.5" r="1.5"/>
                    <path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
