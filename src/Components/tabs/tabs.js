
import './style.css'
import but1 from './but1.jpg'
import but2 from './but2.jpg'
import but3 from './but3.jpg'

const tabs = () => {
    // const listItems = [
    //     {
    //         name: "pencils", 
    //         icon: "../imgase"
    //     }"
    return (
        <div className="container mt-8">
            <div className="w-full flex justify-center">
                <div className="sm:col-3 hidden w-full h-32 sm:h-52 sm:flex m-auto justify-center items-center rounded-t-xl bg-gray-100 ">
                    <div className="w-10/12 flex sm:flex-col sm:w-60 sm:h-36 shadow-lg rounded-xl justify-around">
                        <div className="sm:mt-2 h-14 w-14 rounded-full bg-gray-200 m-auto mt-4 mb-2">
                            <svg className="mt-2 ml-2" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.9215 0.3285C28.7105 0.117595 28.4244 -0.00088501 28.1261 -0.00088501C27.8278 -0.00088501 27.5417 0.117595 27.3307 0.3285L23.625 4.03425L31.9657 12.375L35.6715 8.6715C35.7763 8.567 35.8594 8.44285 35.9161 8.30618C35.9728 8.1695 36.002 8.02298 36.002 7.875C36.002 7.72702 35.9728 7.5805 35.9161 7.44382C35.8594 7.30715 35.7763 7.183 35.6715 7.0785L28.9215 0.3285V0.3285ZM30.375 13.9658L22.0342 5.625L7.40924 20.25H7.87499C8.17336 20.25 8.45951 20.3685 8.67049 20.5795C8.88147 20.7905 8.99999 21.0766 8.99999 21.375V22.5H10.125C10.4234 22.5 10.7095 22.6185 10.9205 22.8295C11.1315 23.0405 11.25 23.3266 11.25 23.625V24.75H12.375C12.6734 24.75 12.9595 24.8685 13.1705 25.0795C13.3815 25.2905 13.5 25.5766 13.5 25.875V27H14.625C14.9234 27 15.2095 27.1185 15.4205 27.3295C15.6315 27.5405 15.75 27.8266 15.75 28.125V28.5908L30.375 13.9658V13.9658ZM13.572 30.7688C13.5246 30.6429 13.5003 30.5095 13.5 30.375V29.25H12.375C12.0766 29.25 11.7905 29.1315 11.5795 28.9205C11.3685 28.7095 11.25 28.4234 11.25 28.125V27H10.125C9.82662 27 9.54048 26.8815 9.3295 26.6705C9.11852 26.4595 8.99999 26.1734 8.99999 25.875V24.75H7.87499C7.57662 24.75 7.29048 24.6315 7.0795 24.4205C6.86852 24.2095 6.74999 23.9234 6.74999 23.625V22.5H5.62499C5.49049 22.4998 5.35712 22.4754 5.23124 22.428L4.82849 22.8285C4.72128 22.9365 4.63708 23.0651 4.58099 23.2065L0.0809909 34.4565C-0.00084309 34.6609 -0.020876 34.8849 0.0233758 35.1006C0.0676276 35.3164 0.174218 35.5143 0.329933 35.6701C0.485647 35.8258 0.683638 35.9324 0.89936 35.9766C1.11508 36.0209 1.33905 36.0008 1.54349 35.919L12.7935 31.419C12.9349 31.3629 13.0635 31.2787 13.1715 31.1715L13.572 30.771V30.7688Z" fill="#F4B840" />
                            </svg>
                        </div>
                        <h3 className="m-auto font-bold mb-4">Pencils</h3>
                        <div className='sm:hidden m-auto'>
                            <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.35173 0.608686C1.6213 0.339196 1.98687 0.187805 2.36804 0.187805C2.74921 0.187805 3.11478 0.339196 3.38435 0.608686L10.5 7.72431L17.6156 0.608686C17.8867 0.346834 18.2498 0.201941 18.6267 0.205216C19.0036 0.208492 19.3642 0.359672 19.6307 0.626197C19.8972 0.892721 20.0484 1.25326 20.0517 1.63017C20.0549 2.00708 19.9101 2.37019 19.6482 2.64131L11.5163 10.7732C11.2467 11.0427 10.8811 11.1941 10.5 11.1941C10.1188 11.1941 9.75323 11.0427 9.48365 10.7732L1.35173 2.64131C1.08224 2.37174 0.930847 2.00617 0.930847 1.625C0.930847 1.24382 1.08224 0.878257 1.35173 0.608686Z" fill="#181818" />
                            </svg>

                        </div>
                    </div>
                </div>
                <div className=" mt-2 sm:hidden w-full h-20 flex m-auto justify-center items-center rounded-xl bg-white border-8 border-gray-100 ">
                    <div className="w-10/12 flex sm:flex-col sm:w-60 sm:h-36 rounded-xl justify-around">
                        <div className=" mt-2 mr-4 h-14 w-14 rounded-full bg-gray-200 m-auto mb-2">
                            <svg className="mt-2 ml-2" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M28.9215 0.3285C28.7105 0.117595 28.4244 -0.00088501 28.1261 -0.00088501C27.8278 -0.00088501 27.5417 0.117595 27.3307 0.3285L23.625 4.03425L31.9657 12.375L35.6715 8.6715C35.7763 8.567 35.8594 8.44285 35.9161 8.30618C35.9728 8.1695 36.002 8.02298 36.002 7.875C36.002 7.72702 35.9728 7.5805 35.9161 7.44382C35.8594 7.30715 35.7763 7.183 35.6715 7.0785L28.9215 0.3285V0.3285ZM30.375 13.9658L22.0342 5.625L7.40924 20.25H7.87499C8.17336 20.25 8.45951 20.3685 8.67049 20.5795C8.88147 20.7905 8.99999 21.0766 8.99999 21.375V22.5H10.125C10.4234 22.5 10.7095 22.6185 10.9205 22.8295C11.1315 23.0405 11.25 23.3266 11.25 23.625V24.75H12.375C12.6734 24.75 12.9595 24.8685 13.1705 25.0795C13.3815 25.2905 13.5 25.5766 13.5 25.875V27H14.625C14.9234 27 15.2095 27.1185 15.4205 27.3295C15.6315 27.5405 15.75 27.8266 15.75 28.125V28.5908L30.375 13.9658V13.9658ZM13.572 30.7688C13.5246 30.6429 13.5003 30.5095 13.5 30.375V29.25H12.375C12.0766 29.25 11.7905 29.1315 11.5795 28.9205C11.3685 28.7095 11.25 28.4234 11.25 28.125V27H10.125C9.82662 27 9.54048 26.8815 9.3295 26.6705C9.11852 26.4595 8.99999 26.1734 8.99999 25.875V24.75H7.87499C7.57662 24.75 7.29048 24.6315 7.0795 24.4205C6.86852 24.2095 6.74999 23.9234 6.74999 23.625V22.5H5.62499C5.49049 22.4998 5.35712 22.4754 5.23124 22.428L4.82849 22.8285C4.72128 22.9365 4.63708 23.0651 4.58099 23.2065L0.0809909 34.4565C-0.00084309 34.6609 -0.020876 34.8849 0.0233758 35.1006C0.0676276 35.3164 0.174218 35.5143 0.329933 35.6701C0.485647 35.8258 0.683638 35.9324 0.89936 35.9766C1.11508 36.0209 1.33905 36.0008 1.54349 35.919L12.7935 31.419C12.9349 31.3629 13.0635 31.2787 13.1715 31.1715L13.572 30.771V30.7688Z" fill="#F4B840" />
                            </svg>
                        </div>
                        <h3 className="m-auto font-bold mb-4 mr-4">Pencils</h3>
                        <div className='sm:hidden m-auto'>
                            <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.35173 0.608686C1.6213 0.339196 1.98687 0.187805 2.36804 0.187805C2.74921 0.187805 3.11478 0.339196 3.38435 0.608686L10.5 7.72431L17.6156 0.608686C17.8867 0.346834 18.2498 0.201941 18.6267 0.205216C19.0036 0.208492 19.3642 0.359672 19.6307 0.626197C19.8972 0.892721 20.0484 1.25326 20.0517 1.63017C20.0549 2.00708 19.9101 2.37019 19.6482 2.64131L11.5163 10.7732C11.2467 11.0427 10.8811 11.1941 10.5 11.1941C10.1188 11.1941 9.75323 11.0427 9.48365 10.7732L1.35173 2.64131C1.08224 2.37174 0.930847 2.00617 0.930847 1.625C0.930847 1.24382 1.08224 0.878257 1.35173 0.608686Z" fill="#181818" />
                            </svg>

                        </div>
                    </div>
                </div>
                <div className="sm:flex col-3 h-52 hidden m-auto justify-center items-center rounded-xl">
                    <div className="flex flex-col w-60 h-36 shadow-lg rounded-xl">
                        <div className="h-14 w-14 rounded-full bg-gray-100 m-auto mt-4">
                            <svg className="mt-2 ml-2" width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.93 0C27.0403 0 26.1842 0.325441 25.5295 0.993451L15.7767 10.9622L25.261 20.6398L35.0306 10.6882C36.3231 9.35214 36.3231 7.19395 35.0306 5.84081L30.2633 0.993451C29.6086 0.325441 28.7693 0 27.93 0ZM14.1652 12.5894L4.16057 22.798C2.85124 24.134 2.85124 26.2922 4.19415 27.6796C2.14622 29.7864 0.0647159 31.8932 -2 34H7.50105L8.94467 32.527C10.254 33.8287 12.3523 33.8116 13.6616 32.4927L23.6495 22.2841" fill="#F4B840" />
                            </svg>
                        </div>
                        <h3 className="testColo m-auto font-bold mb-4">Pencils</h3>
                    </div>
                </div>
                <div className="sm:flex col-3 h-52 hidden m-auto justify-center items-center rounded-xl">
                    <div className="d-flex flex-col w-60 h-36 shadow-lg rounded-xl">
                        <div className="h-14 w-14 rounded-full bg-gray-100 m-auto mt-4">
                            <svg className="mt-3 ml-3" width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.31 5.62C25.806 4.12664 24.0189 2.94872 22.0536 2.15536C20.0882 1.36201 17.9842 0.969205 15.865 1C11.8868 0.990056 8.06749 2.56087 5.24742 5.36688C2.42734 8.1729 0.837446 11.9843 0.827501 15.9625C0.817555 19.9408 2.38837 23.76 5.19438 26.5801C8.0004 29.4002 11.8118 30.9901 15.79 31C16.6472 31.0146 17.4851 30.7441 18.1719 30.231C18.8588 29.7179 19.3558 28.9912 19.585 28.165C19.7311 27.5684 19.7296 26.9451 19.5806 26.3492C19.4316 25.7533 19.1397 25.2027 18.73 24.745C18.6353 24.6372 18.5735 24.5045 18.5519 24.3626C18.5304 24.2207 18.55 24.0757 18.6084 23.9446C18.6668 23.8135 18.7616 23.702 18.8816 23.6232C19.0015 23.5444 19.1415 23.5016 19.285 23.5H21.76C24.0894 23.5109 26.3367 22.6401 28.0507 21.0625C29.7646 19.4849 30.8182 17.3173 31 14.995C31.0558 13.2634 30.7573 11.5387 30.1228 9.92659C29.4882 8.31449 28.5311 6.849 27.31 5.62V5.62ZM8.26 20.11C7.89171 20.3603 7.45743 20.4957 7.01214 20.499C6.56686 20.5024 6.13059 20.3735 5.75859 20.1288C5.38659 19.884 5.09558 19.5344 4.9224 19.1241C4.74922 18.7139 4.70167 18.2615 4.78576 17.8242C4.86986 17.3869 5.08181 16.9844 5.3948 16.6677C5.70778 16.3509 6.10771 16.1341 6.54396 16.0448C6.98021 15.9555 7.43315 15.9976 7.84544 16.1659C8.25772 16.3341 8.61081 16.621 8.86 16.99C9.02698 17.2338 9.14397 17.5082 9.20421 17.7975C9.26444 18.0867 9.26673 18.385 9.21093 18.6752C9.15514 18.9653 9.04236 19.2415 8.87914 19.4878C8.71591 19.7341 8.50548 19.9456 8.26 20.11V20.11ZM10.45 11.875C10.2366 12.2703 9.90972 12.5926 9.51151 12.8005C9.11331 13.0084 8.66198 13.0924 8.21565 13.0416C7.76932 12.9908 7.34841 12.8075 7.00713 12.5154C6.66584 12.2233 6.41981 11.8358 6.30069 11.4026C6.18158 10.9695 6.19485 10.5106 6.33879 10.0851C6.48272 9.65955 6.75074 9.28685 7.10833 9.01495C7.46592 8.74306 7.8967 8.58443 8.34523 8.55949C8.79375 8.53455 9.23947 8.64444 9.625 8.875C10.1225 9.17251 10.4859 9.65053 10.6396 10.2094C10.7933 10.7683 10.7254 11.365 10.45 11.875V11.875ZM14.5 8.5C14.055 8.5 13.62 8.36804 13.25 8.12081C12.88 7.87357 12.5916 7.52217 12.4213 7.11104C12.251 6.69991 12.2064 6.24751 12.2932 5.81105C12.3801 5.37459 12.5943 4.97368 12.909 4.65901C13.2237 4.34434 13.6246 4.13005 14.061 4.04323C14.4975 3.95642 14.9499 4.00098 15.361 4.17127C15.7722 4.34157 16.1236 4.62996 16.3708 4.99997C16.618 5.36998 16.75 5.80499 16.75 6.25C16.75 6.84674 16.5129 7.41904 16.091 7.84099C15.669 8.26295 15.0967 8.5 14.5 8.5V8.5ZM23.125 9.7C22.7395 9.93057 22.2937 10.0405 21.8452 10.0155C21.3967 9.99057 20.9659 9.83194 20.6083 9.56005C20.2507 9.28816 19.9827 8.91545 19.8388 8.48992C19.6948 8.06439 19.6816 7.60552 19.8007 7.17238C19.9198 6.73924 20.1658 6.35168 20.5071 6.05958C20.8484 5.76749 21.2693 5.58424 21.7156 5.53342C22.162 5.48261 22.6133 5.56656 23.0115 5.77447C23.4097 5.98238 23.7366 6.30472 23.95 6.7C24.2254 7.21005 24.2933 7.80669 24.1396 8.36558C23.9859 8.92448 23.6225 9.40249 23.125 9.7V9.7Z" fill="#F4B840" />
                            </svg>
                        </div>
                        <h3 className="m-auto font-bold mb-4">Pencils</h3>
                    </div>
                </div>
                <div className="sm:flex col-3 h-52 hidden m-auto justify-center items-center rounded-xl">
                    <div className="d-flex flex-col w-60 h-36 shadow-lg rounded-xl">
                        <div className="h-14 w-14 rounded-full bg-gray-100 m-auto mt-4">
                            <svg className="mt-3 ml-3" width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 2V29M3 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V23C22.5 23.7956 22.1839 24.5587 21.6213 25.1213C21.0587 25.6839 20.2956 26 19.5 26H3C2.60218 26 2.22064 25.842 1.93934 25.5607C1.65804 25.2794 1.5 24.8978 1.5 24.5V3.5C1.5 3.10218 1.65804 2.72064 1.93934 2.43934C2.22064 2.15804 2.60218 2 3 2V2Z" stroke="#F4B840" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <h3 className="m-auto font-bold mb-4">Pencils</h3>
                    </div>
                </div>
            </div>
            <div className="w-full flex sm:flex-row flex-col bg-gray-100">
                <div className="w-full sm:w-1/3 sm:mt-16">
                    <h3 className="font-normal text-lg ml-4 sm:ml-12 mr-1">
                        Graphite Artist Quality Fine Art Drawing and Sketching Pencils Replaceable Nib Pencils.
                    </h3>
                    <ul className="w-full sm:ml-8 font-bold text-xs sm:text-lg list-disc mt-4">
                        <div className='flex sm:flex-col'>
                            <li className='m-2 w-1/2'>
                                MECHANICAL PENCILS
                            </li>
                            <li className='m-2 w-1/2'>
                                ARCHITECT'S CHOICE
                            </li>
                        </div>

                        <div className='flex sm:flex-col'>
                            <li className='m-2 w-1/2'>
                                EXECUTIVE PENCILS
                            </li>
                            <li className='m-2 w-1/2'>
                                ENGRAVABLE PENCILS
                            </li>
                        </div>

                    </ul>
                    <div className='sm:flex hidden sm:justify-start justify-center'>
                        <button className=" mb-4 mt-4 bg-amber-400 h-14 sm:ml-10 rounded-2 text-sm font-bold w-32 text-white">
                            SHOP ALL
                        </button>
                    </div>
                </div>

                <div className="ms:w-full mt-10 ml-8 mr-8">
                    <div className="h-20 bg-white rounded-2xl d-flex border-4 border-white">
                        <div className="m-auto d-flex justify-center w-2/5 pl-2 pr-2 bg-gray-100 sm:bg-white pt-4 pb-3 sm:pt-0 sm:pb-0 rounded-bl-2xl rounded-tl-2xl">
                            <svg width="131" height="30" viewBox="0 0 131 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.404 24.068C1.22 23.42 1.592 23.12 1.52 23.168C3.872 21.224 5.72 19.628 7.064 18.38C8.432 17.132 9.584 15.824 10.52 14.456C11.456 13.088 11.924 11.756 11.924 10.46C11.924 9.476 11.696 8.708 11.24 8.156C10.784 7.604 10.1 7.328 9.188 7.328C8.276 7.328 7.556 7.676 7.028 8.372C6.524 9.044 6.272 10.004 6.272 11.252H0.332C0.38 9.212 0.812 7.508 1.628 6.14C2.468 4.772 3.56 3.764 4.904 3.116C6.272 2.468 7.784 2.144 9.44 2.144C12.296 2.144 14.444 2.876 15.884 4.34C17.348 5.804 18.08 7.712 18.08 10.064C18.08 12.632 17.204 15.02 15.452 17.228C13.7 19.412 11.468 21.548 8.756 23.636H18.476V28.64H0.404V24.068ZM39.6904 8.084H28.4584V13.052C28.9384 12.524 29.6104 12.092 30.4744 11.756C31.3384 11.42 32.2744 11.252 33.2824 11.252C35.0824 11.252 36.5704 11.66 37.7464 12.476C38.9464 13.292 39.8224 14.348 40.3744 15.644C40.9264 16.94 41.2024 18.344 41.2024 19.856C41.2024 22.664 40.4104 24.896 38.8264 26.552C37.2424 28.184 35.0104 29 32.1304 29C30.2104 29 28.5424 28.676 27.1264 28.028C25.7104 27.356 24.6184 26.432 23.8504 25.256C23.0824 24.08 22.6624 22.724 22.5904 21.188H28.6024C28.7464 21.932 29.0944 22.556 29.6464 23.06C30.1984 23.54 30.9544 23.78 31.9144 23.78C33.0424 23.78 33.8824 23.42 34.4344 22.7C34.9864 21.98 35.2624 21.02 35.2624 19.82C35.2624 18.644 34.9744 17.744 34.3984 17.12C33.8224 16.496 32.9824 16.184 31.8784 16.184C31.0624 16.184 30.3904 16.388 29.8624 16.796C29.3344 17.18 28.9864 17.696 28.8184 18.344H22.8784V2.684H39.6904V8.084ZM44.0965 9.344C44.0965 7.4 44.6485 5.9 45.7525 4.844C46.8805 3.788 48.3325 3.26 50.1085 3.26C51.8845 3.26 53.3245 3.788 54.4285 4.844C55.5325 5.9 56.0845 7.4 56.0845 9.344C56.0845 11.288 55.5325 12.788 54.4285 13.844C53.3245 14.9 51.8845 15.428 50.1085 15.428C48.3325 15.428 46.8805 14.9 45.7525 13.844C44.6485 12.788 44.0965 11.288 44.0965 9.344ZM68.5405 3.656L54.6805 29H48.7405L62.6005 3.656H68.5405ZM50.0725 6.86C48.9205 6.86 48.3445 7.688 48.3445 9.344C48.3445 10.976 48.9205 11.792 50.0725 11.792C50.6245 11.792 51.0565 11.588 51.3685 11.18C51.6805 10.772 51.8365 10.16 51.8365 9.344C51.8365 7.688 51.2485 6.86 50.0725 6.86ZM61.2325 23.312C61.2325 21.368 61.7845 19.868 62.8885 18.812C63.9925 17.756 65.4325 17.228 67.2085 17.228C68.9845 17.228 70.4245 17.756 71.5285 18.812C72.6325 19.868 73.1845 21.368 73.1845 23.312C73.1845 25.256 72.6325 26.756 71.5285 27.812C70.4245 28.868 68.9845 29.396 67.2085 29.396C65.4325 29.396 63.9925 28.868 62.8885 27.812C61.7845 26.756 61.2325 25.256 61.2325 23.312ZM67.1725 20.828C66.6205 20.828 66.1885 21.032 65.8765 21.44C65.5885 21.848 65.4445 22.472 65.4445 23.312C65.4445 24.944 66.0205 25.76 67.1725 25.76C67.7245 25.76 68.1565 25.556 68.4685 25.148C68.7805 24.74 68.9365 24.128 68.9365 23.312C68.9365 22.496 68.7805 21.884 68.4685 21.476C68.1565 21.044 67.7245 20.828 67.1725 20.828ZM93.3096 29.288C91.3416 29.288 89.5656 28.868 87.9816 28.028C86.4216 27.188 85.1856 25.988 84.2736 24.428C83.3856 22.868 82.9416 21.044 82.9416 18.956C82.9416 16.892 83.3976 15.08 84.3096 13.52C85.2216 11.936 86.4696 10.724 88.0536 9.884C89.6376 9.044 91.4136 8.624 93.3816 8.624C95.3496 8.624 97.1256 9.044 98.7096 9.884C100.294 10.724 101.542 11.936 102.454 13.52C103.366 15.08 103.822 16.892 103.822 18.956C103.822 21.02 103.354 22.844 102.418 24.428C101.506 25.988 100.246 27.188 98.6376 28.028C97.0536 28.868 95.2776 29.288 93.3096 29.288ZM93.3096 23.96C94.4856 23.96 95.4816 23.528 96.2976 22.664C97.1376 21.8 97.5576 20.564 97.5576 18.956C97.5576 17.348 97.1496 16.112 96.3336 15.248C95.5416 14.384 94.5576 13.952 93.3816 13.952C92.1816 13.952 91.1856 14.384 90.3936 15.248C89.6016 16.088 89.2056 17.324 89.2056 18.956C89.2056 20.564 89.5896 21.8 90.3576 22.664C91.1496 23.528 92.1336 23.96 93.3096 23.96ZM117.167 14.024H113.855V29H107.699V14.024H105.467V8.912H107.699V8.336C107.699 5.864 108.407 3.992 109.823 2.72C111.239 1.424 113.315 0.775999 116.051 0.775999C116.507 0.775999 116.843 0.787998 117.059 0.811998V6.032C115.883 5.96 115.055 6.128 114.575 6.536C114.095 6.944 113.855 7.676 113.855 8.732V8.912H117.167V14.024ZM130.14 14.024H126.828V29H120.672V14.024H118.44V8.912H120.672V8.336C120.672 5.864 121.38 3.992 122.796 2.72C124.212 1.424 126.288 0.775999 129.024 0.775999C129.48 0.775999 129.816 0.787998 130.032 0.811998V6.032C128.856 5.96 128.028 6.128 127.548 6.536C127.068 6.944 126.828 7.676 126.828 8.732V8.912H130.14V14.024Z" fill="#F4B840" />
                            </svg>
                        </div>
                        <div className="h-100 sm:border-4 sm:border-white bg-gray-100 w-100 rounded-br-2xl rounded-tr-2xl " >
                            <h2 className="mt-3 ml-6 font-light text-base sm:text-2xl"> Offer Applicable on ALL Our Pencils</h2>
                        </div>
                    </div>
                    <div className='flex mb-8'>
                        <div className="sm:w-1/3 w-1/2 bg-white mt-4 rounded-2xl m-2">
                            <div className='p-8 pb-2 pt-2 mt-2'>
                                <img src={but1} />
                            </div>
                            <div>
                                <p className='font-semibold text-center mb-0'>Aero Mechanical Pencils</p>
                                <p className='text-center mb-8'>
                                    <span className='mr-2 font-bold'>$99.00</span>
                                    <span className='line-through opacity-80'>$125.00</span>
                                </p>
                            </div>
                        </div>
                        <div className="sm:w-1/3 w-1/2 bg-white mt-4 rounded-2xl ml-3 mr-3 mb-2">
                            <div className='p-8 pb-3 pt-2'>
                                <img src={but2} />
                            </div>
                            <div>
                                <p className='font-semibold text-center mb-0'>Castell Mechanical Pencils</p>
                                <p className='text-center'>
                                    <span className='mr-2 font-bold'>$75.00</span>
                                    <span className='line-through opacity-80'>$90.00</span>
                                </p>
                            </div>
                        </div>
                        <div className="sm:block hidden w-1/3 bg-white mt-4 rounded-2xl m-2">
                            <div className='p-8 pb-2 pt-2'>
                                <img src={but3} />
                            </div>
                            <div>
                                <p className='font-semibold text-center mb-0'>Architect Choice Pencils</p>
                                <p className='text-center'>
                                    <span className='mr-2 font-bold'>$45.00</span>
                                    <span className='line-through opacity-80'>$70.00</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sm:hidden flex sm:justify-start justify-center'>
                    <button className=" mb-4 mt-4 bg-amber-400 h-14 sm:ml-10 rounded-2 text-sm font-bold w-32 text-white">
                        SHOP ALL
                    </button>
                </div>
                <div className='bg-white mt-4'>
                    <div className=" mt-2 sm:hidden w-full h-20 flex m-auto justify-center items-center rounded-xl bg-white border-8 border-gray-100 ">
                        <div className="w-10/12 flex sm:flex-col sm:w-60 sm:h-36 rounded-xl justify-around">
                            <div className=" mt-2 mr-4 h-14 w-14 rounded-full bg-gray-200 m-auto mb-2">
                                <svg className="mt-2 ml-2" width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.93 0C27.0403 0 26.1842 0.325441 25.5295 0.993451L15.7767 10.9622L25.261 20.6398L35.0306 10.6882C36.3231 9.35214 36.3231 7.19395 35.0306 5.84081L30.2633 0.993451C29.6086 0.325441 28.7693 0 27.93 0ZM14.1652 12.5894L4.16057 22.798C2.85124 24.134 2.85124 26.2922 4.19415 27.6796C2.14622 29.7864 0.0647159 31.8932 -2 34H7.50105L8.94467 32.527C10.254 33.8287 12.3523 33.8116 13.6616 32.4927L23.6495 22.2841" fill="#F4B840" />
                                </svg>
                            </div>
                            <h3 className="m-auto font-bold mb-4 mr-4">Markers</h3>
                            <div className='sm:hidden m-auto'>
                                <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.35173 0.608686C1.6213 0.339196 1.98687 0.187805 2.36804 0.187805C2.74921 0.187805 3.11478 0.339196 3.38435 0.608686L10.5 7.72431L17.6156 0.608686C17.8867 0.346834 18.2498 0.201941 18.6267 0.205216C19.0036 0.208492 19.3642 0.359672 19.6307 0.626197C19.8972 0.892721 20.0484 1.25326 20.0517 1.63017C20.0549 2.00708 19.9101 2.37019 19.6482 2.64131L11.5163 10.7732C11.2467 11.0427 10.8811 11.1941 10.5 11.1941C10.1188 11.1941 9.75323 11.0427 9.48365 10.7732L1.35173 2.64131C1.08224 2.37174 0.930847 2.00617 0.930847 1.625C0.930847 1.24382 1.08224 0.878257 1.35173 0.608686Z" fill="#181818" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className=" mt-2 sm:hidden w-full h-20 flex m-auto justify-center items-center rounded-xl bg-white border-8 border-gray-100 ">
                        <div className="w-10/12 flex sm:flex-col sm:w-60 sm:h-36 rounded-xl justify-around">
                            <div className=" mt-2 h-14 w-14 rounded-full bg-gray-200 m-auto mb-2">
                                <svg className="mt-3 ml-3" width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.31 5.62C25.806 4.12664 24.0189 2.94872 22.0536 2.15536C20.0882 1.36201 17.9842 0.969205 15.865 1C11.8868 0.990056 8.06749 2.56087 5.24742 5.36688C2.42734 8.1729 0.837446 11.9843 0.827501 15.9625C0.817555 19.9408 2.38837 23.76 5.19438 26.5801C8.0004 29.4002 11.8118 30.9901 15.79 31C16.6472 31.0146 17.4851 30.7441 18.1719 30.231C18.8588 29.7179 19.3558 28.9912 19.585 28.165C19.7311 27.5684 19.7296 26.9451 19.5806 26.3492C19.4316 25.7533 19.1397 25.2027 18.73 24.745C18.6353 24.6372 18.5735 24.5045 18.5519 24.3626C18.5304 24.2207 18.55 24.0757 18.6084 23.9446C18.6668 23.8135 18.7616 23.702 18.8816 23.6232C19.0015 23.5444 19.1415 23.5016 19.285 23.5H21.76C24.0894 23.5109 26.3367 22.6401 28.0507 21.0625C29.7646 19.4849 30.8182 17.3173 31 14.995C31.0558 13.2634 30.7573 11.5387 30.1228 9.92659C29.4882 8.31449 28.5311 6.849 27.31 5.62V5.62ZM8.26 20.11C7.89171 20.3603 7.45743 20.4957 7.01214 20.499C6.56686 20.5024 6.13059 20.3735 5.75859 20.1288C5.38659 19.884 5.09558 19.5344 4.9224 19.1241C4.74922 18.7139 4.70167 18.2615 4.78576 17.8242C4.86986 17.3869 5.08181 16.9844 5.3948 16.6677C5.70778 16.3509 6.10771 16.1341 6.54396 16.0448C6.98021 15.9555 7.43315 15.9976 7.84544 16.1659C8.25772 16.3341 8.61081 16.621 8.86 16.99C9.02698 17.2338 9.14397 17.5082 9.20421 17.7975C9.26444 18.0867 9.26673 18.385 9.21093 18.6752C9.15514 18.9653 9.04236 19.2415 8.87914 19.4878C8.71591 19.7341 8.50548 19.9456 8.26 20.11V20.11ZM10.45 11.875C10.2366 12.2703 9.90972 12.5926 9.51151 12.8005C9.11331 13.0084 8.66198 13.0924 8.21565 13.0416C7.76932 12.9908 7.34841 12.8075 7.00713 12.5154C6.66584 12.2233 6.41981 11.8358 6.30069 11.4026C6.18158 10.9695 6.19485 10.5106 6.33879 10.0851C6.48272 9.65955 6.75074 9.28685 7.10833 9.01495C7.46592 8.74306 7.8967 8.58443 8.34523 8.55949C8.79375 8.53455 9.23947 8.64444 9.625 8.875C10.1225 9.17251 10.4859 9.65053 10.6396 10.2094C10.7933 10.7683 10.7254 11.365 10.45 11.875V11.875ZM14.5 8.5C14.055 8.5 13.62 8.36804 13.25 8.12081C12.88 7.87357 12.5916 7.52217 12.4213 7.11104C12.251 6.69991 12.2064 6.24751 12.2932 5.81105C12.3801 5.37459 12.5943 4.97368 12.909 4.65901C13.2237 4.34434 13.6246 4.13005 14.061 4.04323C14.4975 3.95642 14.9499 4.00098 15.361 4.17127C15.7722 4.34157 16.1236 4.62996 16.3708 4.99997C16.618 5.36998 16.75 5.80499 16.75 6.25C16.75 6.84674 16.5129 7.41904 16.091 7.84099C15.669 8.26295 15.0967 8.5 14.5 8.5V8.5ZM23.125 9.7C22.7395 9.93057 22.2937 10.0405 21.8452 10.0155C21.3967 9.99057 20.9659 9.83194 20.6083 9.56005C20.2507 9.28816 19.9827 8.91545 19.8388 8.48992C19.6948 8.06439 19.6816 7.60552 19.8007 7.17238C19.9198 6.73924 20.1658 6.35168 20.5071 6.05958C20.8484 5.76749 21.2693 5.58424 21.7156 5.53342C22.162 5.48261 22.6133 5.56656 23.0115 5.77447C23.4097 5.98238 23.7366 6.30472 23.95 6.7C24.2254 7.21005 24.2933 7.80669 24.1396 8.36558C23.9859 8.92448 23.6225 9.40249 23.125 9.7V9.7Z" fill="#F4B840" />
                                </svg>
                            </div>
                            <h3 className="m-auto font-bold mb-4 mr-4">Drawing Colors</h3>
                            <div className='sm:hidden m-auto'>
                                <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.35173 0.608686C1.6213 0.339196 1.98687 0.187805 2.36804 0.187805C2.74921 0.187805 3.11478 0.339196 3.38435 0.608686L10.5 7.72431L17.6156 0.608686C17.8867 0.346834 18.2498 0.201941 18.6267 0.205216C19.0036 0.208492 19.3642 0.359672 19.6307 0.626197C19.8972 0.892721 20.0484 1.25326 20.0517 1.63017C20.0549 2.00708 19.9101 2.37019 19.6482 2.64131L11.5163 10.7732C11.2467 11.0427 10.8811 11.1941 10.5 11.1941C10.1188 11.1941 9.75323 11.0427 9.48365 10.7732L1.35173 2.64131C1.08224 2.37174 0.930847 2.00617 0.930847 1.625C0.930847 1.24382 1.08224 0.878257 1.35173 0.608686Z" fill="#181818" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className=" mt-2 sm:hidden w-full h-20 flex m-auto justify-center items-center rounded-xl bg-white border-8 border-gray-100 ">
                        <div className="w-10/12 flex sm:flex-col sm:w-60 sm:h-36 rounded-xl justify-around">
                            <div className=" mt-2 h-14 w-14 rounded-full bg-gray-200 m-auto mb-2">
                                <svg className="mt-3 ml-3" width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 2V29M3 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V23C22.5 23.7956 22.1839 24.5587 21.6213 25.1213C21.0587 25.6839 20.2956 26 19.5 26H3C2.60218 26 2.22064 25.842 1.93934 25.5607C1.65804 25.2794 1.5 24.8978 1.5 24.5V3.5C1.5 3.10218 1.65804 2.72064 1.93934 2.43934C2.22064 2.15804 2.60218 2 3 2V2Z" stroke="#F4B840" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                            <h3 className="m-auto font-bold mb-4 mr-4">NoteBooks</h3>
                            <div className='sm:hidden m-auto'>
                                <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.35173 0.608686C1.6213 0.339196 1.98687 0.187805 2.36804 0.187805C2.74921 0.187805 3.11478 0.339196 3.38435 0.608686L10.5 7.72431L17.6156 0.608686C17.8867 0.346834 18.2498 0.201941 18.6267 0.205216C19.0036 0.208492 19.3642 0.359672 19.6307 0.626197C19.8972 0.892721 20.0484 1.25326 20.0517 1.63017C20.0549 2.00708 19.9101 2.37019 19.6482 2.64131L11.5163 10.7732C11.2467 11.0427 10.8811 11.1941 10.5 11.1941C10.1188 11.1941 9.75323 11.0427 9.48365 10.7732L1.35173 2.64131C1.08224 2.37174 0.930847 2.00617 0.930847 1.625C0.930847 1.24382 1.08224 0.878257 1.35173 0.608686Z" fill="#181818" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="m-auto d-flex justify-center mt-4 flex-row">
                <div className="w-4 h-4 bg-black mr-1 rounded-full">
                </div>
                <div className="w-4 h-4 bg-gray-400 rounded-full">
                </div>
            </div>
        </div >

    )
}

export default tabs