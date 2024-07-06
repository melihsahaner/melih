import * as React from "react";
import melih from "../images/resim.png";

export default function MyComponent() {
  return (
    <div className="flex flex-col flex-wrap content-start">
      <div className="px-5 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 justify-center px-8 py-11 text-black max-md:px-5 max-md:mt-7">
            <img 
            loading="lazy"
            srcSet={melih}
            className="rounded-full"
            style={{ width: "74px", height: "74px", marginRight: "-20px" }}
          />
              <div className="flex flex-col self-start mt-2.5">
                <div className="text-2xl font-medium">Melih Şahaner</div>
                <div className="mt-1 text-lg">UI/UX Designer</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-6 w-full font-semibold rounded-2xl bg-slate-200 leading-[150%] text-zinc-900 max-md:px-5 max-md:mt-7">
              <div className="text-sm leading-5">Portfolio View</div>
              <div className="mt-2 text-2xl max-md:mr-2.5">3</div>
              <div className="mt-2.5 text-xs underline max-md:mr-2.5">
                Upgrade your portfolio with premium templates
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-6 w-full font-semibold bg-sky-100 rounded-2xl leading-[150%] text-zinc-900 max-md:px-5 max-md:mt-7">
              <div className="text-sm leading-5">UpperRate</div>
              <div className="mt-2 text-2xl">1,156</div>
              <div className="mt-2 text-xs underline">
                Do you know how to upper your UpperRate?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-7 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-7 max-md:max-w-full">
              <div className="flex flex-col pt-5 pl-6 rounded-2xl bg-slate-50 max-md:pl-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between text-sm max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <div className="my-auto font-semibold leading-[143%] text-zinc-900">
                    TicketBoard
                  </div>
                  <div className="flex flex-col justify-center font-medium text-center text-violet-900">
                    <button
                      className="justify-center px-3 py-2.5 rounded-2xl border border-violet-900 border-solid hover:bg-violet-900 hover:text-white"
                      onClick={() => alert('Show More Clicked')}
                      style={{ marginLeft: '-10px' }}
                    >
                      Show More
                    </button>
                  </div>
                </div>
                <div className="flex flex-col px-6 pb-2 mt-2.5 rounded-2xl bg-slate-50 max-md:px-5 max-md:max-w-full">
                  <div className="px-px pb-6 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow pb-3 text-xs leading-5 text-zinc-900">
                          <div className="justify-center py-2 whitespace-nowrap border-b border-solid border-zinc-900 border-opacity-20 text-zinc-900 text-opacity-40">
                            Name
                          </div>
                          <div className="mt-3 max-md:mr-2.5">
                            Software Development
                          </div>
                          <div className="mt-6 max-md:mr-2.5">UI/UX Design</div>
                          <div className="mt-6 max-md:mr-2.5">
                            UI App Design
                          </div>
                          <div className="mt-6 max-md:mr-2.5">
                            Website Design
                          </div>
                          <div className="mt-6 max-md:mr-2.5">
                            Branding Design
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow pb-3 text-xs leading-5 whitespace-nowrap text-zinc-900">
                          <div className="justify-center px-3 py-2 border-b border-solid border-zinc-900 border-opacity-20 text-zinc-900 text-opacity-40">
                            Budget
                          </div>
                          <div className="mx-3 mt-3 max-md:mx-2.5">$79.49</div>
                          <div className="mx-3 mt-6 max-md:mx-2.5">$128.50</div>
                          <div className="mx-3 mt-6 max-md:mx-2.5">$39.99</div>
                          <div className="mx-3 mt-6 max-md:mx-2.5">$20.00</div>
                          <div className="mx-3 mt-6 max-md:mx-2.5">$79.49</div>
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow pb-3 text-xs leading-5 whitespace-nowrap text-zinc-900">
                          <div className="justify-center px-3 py-2 border-b border-solid border-zinc-900 border-opacity-20 text-zinc-900 text-opacity-40">
                            Date
                          </div>
                          <div className="mx-3 mt-3 max-md:mx-2.5">
                            12/10/2023
                          </div>
                          <div className="mx-3 mt-6 max-md:mx-2.5">
                            12/10/2023
                          </div>
                          <div className="mx-3 mt-6 max-md:mx-2.5">
                            12/10/2023
                          </div>
                          <div className="mx-3 mt-6 max-md:mx-2.5">
                            12/10/2023
                          </div>
                          <div className="mx-3 mt-6 max-md:mx-2.5">
                            12/10/2023
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-6 mt-8 rounded-2xl bg-slate-50 max-md:px-5 max-md:max-w-full">
                <div className="text-sm font-semibold leading-5 text-zinc-900 max-md:max-w-full">
                  Projects
                </div>
                <div className="pb-6 mt-6 max-md:pr-5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow pb-3 text-xs leading-5 text-zinc-900">
                        <div className="justify-center py-2 whitespace-nowrap border-b border-solid border-zinc-900 border-opacity-20 text-zinc-900 text-opacity-40">
                          Name
                        </div>
                        <div className="mt-3 max-md:mr-2.5">
                          Software Development
                        </div>
                        <div className="mt-6 max-md:mr-2.5">UI/UX Project</div>
                        <div className="mt-6 max-md:mr-2.5">Team Project</div>
                        <div className="mt-6 max-md:mr-2.5">
                          UpperBoard Development
                        </div>
                        <div className="mt-6 max-md:mr-2.5">Design Project</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow pb-3 text-xs leading-5 whitespace-nowrap text-zinc-900">
                        <div className="justify-center px-3 py-2 border-b border-solid border-zinc-900 border-opacity-20 text-zinc-900 text-opacity-40">
                          Budget
                        </div>
                        <div className="mx-3 mt-3 max-md:mx-2.5">$79.49</div>
                        <div className="mx-3 mt-6 max-md:mx-2.5">$128.50</div>
                        <div className="mx-3 mt-6 max-md:mx-2.5">$39.99</div>
                        <div className="mx-3 mt-6 max-md:mx-2.5">$20.00</div>
                        <div className="mx-3 mt-6 max-md:mx-2.5">$79.49</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow pb-3">
                        <div className="flex gap-0 justify-center pl-3 border-b border-solid border-zinc-900 border-opacity-20">
                          <div className="my-auto text-xs leading-5 text-zinc-900 text-opacity-40">
                            Date
                          </div>
                          <div className="flex z-10 flex-col flex-1 justify-center">
                            <div className="shrink-0 h-10 border-b border-solid border-zinc-900 border-opacity-20" />
                          </div>
                        </div>
                        <div className="mx-3 mt-3 text-xs leading-5 text-zinc-900 max-md:mx-2.5">
                          12/10/2023
                        </div>
                        <div className="mx-3 mt-6 text-xs leading-5 text-zinc-900 max-md:mx-2.5">
                          12/10/2023
                        </div>
                        <div className="mx-3 mt-6 text-xs leading-5 text-zinc-900 max-md:mx-2.5">
                          12/10/2023
                        </div>
                        <div className="mx-3 mt-6 text-xs leading-5 text-zinc-900 max-md:mx-2.5">
                          12/10/2023
                        </div>
                        <div className="mx-3 mt-6 text-xs leading-5 text-zinc-900 max-md:mx-2.5">
                          12/10/2023
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[28%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-7">
              <div className="flex flex-col px-6 py-6 w-full rounded-2xl bg-slate-50 max-w-[272px] max-md:px-5">
                <div className="text-sm font-semibold leading-5 text-zinc-900">
                  Completion Bar
                </div>
                <div className="flex gap-3.5 py-1.5 pr-4 mt-4 max-md:mr-1.5">
                  <div className="text-xs leading-5 text-black">%25</div>
                  <div className="flex flex-col flex-1 justify-center my-auto bg-sky-200 rounded-[80px]">
                    <div className="shrink-0 h-1.5 bg-zinc-900 rounded-[80px]" />
                  </div>
                </div>
                <div className="mt-4 text-xs leading-5 underline text-zinc-900">
                  Lets Complete Your Profile!
                </div>
              </div>
              <div className="flex flex-col px-6 pt-6 mt-8 w-full rounded-2xl bg-slate-50 max-w-[272px] max-md:px-5">
                <div className="text-sm font-semibold leading-5 text-zinc-900">
                  Notifications
                </div>
                <div className="flex flex-wrap gap-2 content-start px-0.5 py-1 mt-4 rounded-lg">
                  <div className="flex justify-center items-center self-start p-1 w-6 h-6 bg-sky-100 rounded-lg">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac690df1258dcdc3f636193022af219288a0369fbba58514f2c452c547bef6b2?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                      className="w-4 aspect-square"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-center rounded-lg">
                    <div className="text-sm leading-5 text-ellipsis text-zinc-900">
                      A new task has been added to the project
                    </div>
                    <div className="text-xs leading-5 text-zinc-900 text-opacity-40">
                      Just now
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 content-start p-0.5 mt-2 rounded-lg">
                  <div className="flex justify-center items-center self-start p-1 w-6 h-6 rounded-lg bg-slate-200">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/65ea5db4b5349aba00dedcb1f1d89542d8fe3c66c50ce47def18ae5d207a07d7?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                      className="w-4 aspect-square"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-center rounded-lg">
                    <div className="text-sm leading-5 text-ellipsis text-zinc-900">
                      You have a new message
                    </div>
                    <div className="text-xs leading-5 text-zinc-900 text-opacity-40">
                      59 minutes ago
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col p-6 mt-8 text-sm leading-5 rounded-2xl bg-slate-50 max-w-[272px] text-zinc-900 max-md:px-5">
                <div className="font-semibold">TaskBoard</div>
                <div className="flex flex-col px-1 pt-1 pb-8 mt-4">
                  <div className="text-ellipsis">
                    You have a bug that needs to be fixed.
                  </div>
                  <div className="text-xs leading-5 text-zinc-900 text-opacity-40">
                    Project Name - Status
                  </div>
                  <div className="mt-7 text-ellipsis">New user registered</div>
                  <div className="text-xs leading-5 text-zinc-900 text-opacity-40">
                    Project Name - Status
                  </div>
                  <div className="mt-7 text-ellipsis">New user registered</div>
                  <div className="text-xs leading-5 text-zinc-900 text-opacity-40">
                    Project Name - Status
                  </div>
                  <div className="mt-7 text-ellipsis">New user registered</div>
                  <div className="text-xs leading-5 text-zinc-900 text-opacity-40">
                    Project Name - Status
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
