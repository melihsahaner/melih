import { exportDefaultSpecifier } from "@babel/types";
import * as React from "react";

export default function MyComponent() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center px-16 pt-6 pb-2.5 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
        <div className="w-full max-w-[1210px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-7 pt-5 mx-auto w-full text-white bg-indigo-700 rounded-3xl max-md:pl-5 max-md:mt-10">
                <div className="flex gap-5 justify-between self-end max-w-full w-[257px]">
                  <div className="flex flex-col items-center">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c3d8c23518a91867a3b23efbfc4da3bf0eaa9ece2c685a171d17212f862ad4e8?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d8c23518a91867a3b23efbfc4da3bf0eaa9ece2c685a171d17212f862ad4e8?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d8c23518a91867a3b23efbfc4da3bf0eaa9ece2c685a171d17212f862ad4e8?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d8c23518a91867a3b23efbfc4da3bf0eaa9ece2c685a171d17212f862ad4e8?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d8c23518a91867a3b23efbfc4da3bf0eaa9ece2c685a171d17212f862ad4e8?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d8c23518a91867a3b23efbfc4da3bf0eaa9ece2c685a171d17212f862ad4e8?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d8c23518a91867a3b23efbfc4da3bf0eaa9ece2c685a171d17212f862ad4e8?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d8c23518a91867a3b23efbfc4da3bf0eaa9ece2c685a171d17212f862ad4e8?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                      className="max-w-full aspect-square w-[110px]"
                    />
                    <div className="self-stretch mt-5 text-2xl font-semibold tracking-tight leading-8">
                      Meriç Kalkan
                    </div>
                    <div className="flex gap-1.5 mt-2 text-xs font-medium tracking-tight leading-6">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/8b694dbac7532cfb0d0718e342dd0b30d4555d9fc9be400abc919dec01f93f83?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b694dbac7532cfb0d0718e342dd0b30d4555d9fc9be400abc919dec01f93f83?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b694dbac7532cfb0d0718e342dd0b30d4555d9fc9be400abc919dec01f93f83?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b694dbac7532cfb0d0718e342dd0b30d4555d9fc9be400abc919dec01f93f83?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b694dbac7532cfb0d0718e342dd0b30d4555d9fc9be400abc919dec01f93f83?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b694dbac7532cfb0d0718e342dd0b30d4555d9fc9be400abc919dec01f93f83?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b694dbac7532cfb0d0718e342dd0b30d4555d9fc9be400abc919dec01f93f83?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/8b694dbac7532cfb0d0718e342dd0b30d4555d9fc9be400abc919dec01f93f83?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                        className="shrink-0 self-start w-2 aspect-[0.72] fill-white"
                      />
                      <div>Istanbul, Turkey</div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0738f0937159124569158dad112aa6aa0407bfda956623f62a1e545210aab9ce?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                    className="shrink-0 self-start w-5 border-2 border-white border-solid aspect-square stroke-[2px] stroke-white"
                  />
                </div>
                <div className="mt-3 text-sm font-medium tracking-normal leading-4 text-center">
                  At Floyka Design Studio, a professional design studio based in
                  Turkey, we are known as a team passionate about delivering
                  creative and impressive designs with the Blockchain ecosystem.{" "}
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3f05977550586499f459d31bba6217b6dd48b415ef7105d55273a4dcc45df13?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                  className="self-center mt-1.5 max-w-full aspect-[2.94] w-[122px]"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-base font-semibold tracking-tight leading-7 text-blue-950 max-md:mt-10">
                <div className="text-4xl font-bold tracking-tighter leading-10">
                  My Skills{" "}
                </div>
                <div className="mt-5">Brand Designer</div>
                <div className="mt-1 text-xs font-medium tracking-tight leading-5 text-slate-400">
                  With 7 years of design experience, we do the branding works of
                  big brands.
                </div>
                <div className="mt-8">UI Designer</div>
                <div className="mt-1 text-xs font-medium tracking-tight leading-5 text-slate-400">
                  We do all kinds of digital marking works for users.
                </div>
                <div className="mt-9">UX Designer</div>
                <div className="mt-1 text-xs font-medium tracking-tight leading-5 text-slate-400">
                  I have 2 years of experience in designing interfaces that are
                  easiest for users.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-base font-semibold tracking-tight leading-7 text-blue-950 max-md:mt-10">
                <div className="text-4xl font-bold tracking-tighter leading-10">
                  Experience
                </div>
                <div className="mt-5">BuildChain</div>
                <div className="mt-2 text-xs font-medium tracking-tight leading-5 text-slate-400">
                  Since January 2021, I have been the Community Manager.
                </div>
                <div className="mt-8">KimlikDAO</div>
                <div className="mt-2 text-xs font-medium tracking-tight leading-5 text-slate-400">
                  I have been a designer in the KimlikDAO Project since 2023.
                </div>
                <div className="mt-8">Floyka Design Studio</div>
                <div className="mt-1 text-xs font-medium tracking-tight leading-5 text-slate-400">
                  For 1 year, I have been working as Creative Director at
                  Floyka.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-20 py-16 mt-5 w-full bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
        <div className="w-full max-w-[1363px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c88df32c9fc101070e9aa68654ebb3c127cce3e4c59fb23931d95c8dce65fd78?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c88df32c9fc101070e9aa68654ebb3c127cce3e4c59fb23931d95c8dce65fd78?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c88df32c9fc101070e9aa68654ebb3c127cce3e4c59fb23931d95c8dce65fd78?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c88df32c9fc101070e9aa68654ebb3c127cce3e4c59fb23931d95c8dce65fd78?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c88df32c9fc101070e9aa68654ebb3c127cce3e4c59fb23931d95c8dce65fd78?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c88df32c9fc101070e9aa68654ebb3c127cce3e4c59fb23931d95c8dce65fd78?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c88df32c9fc101070e9aa68654ebb3c127cce3e4c59fb23931d95c8dce65fd78?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c88df32c9fc101070e9aa68654ebb3c127cce3e4c59fb23931d95c8dce65fd78?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                  className="w-full aspect-[2.04] max-md:max-w-full"
                />
                <div className="mt-6 text-2xl font-semibold tracking-tight leading-8 text-blue-950 max-md:max-w-full">
                  WebV Agency All Branding
                </div>
                <div className="mt-1.5 text-sm font-medium tracking-tight leading-5 text-slate-400 max-md:max-w-full">
                  WebV.Agency All Branding Design - Floyka. We are building web3
                  ecosystems...
                </div>
                <div className="flex gap-1.5 self-start mt-3.5 text-base font-bold tracking-tight leading-7 text-indigo-600">
                  <div className="grow">See Project</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0147a17f61c8e00268bcc16e55a4474b3a2447f47d964172dc909aa9b4bcee49?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                    className="shrink-0 self-start aspect-[1.49] fill-indigo-600 w-[18px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fe998d95a8587035d8b6adef6108eccdbea7157ab42b20c25edbb20be8c09bc7?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe998d95a8587035d8b6adef6108eccdbea7157ab42b20c25edbb20be8c09bc7?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe998d95a8587035d8b6adef6108eccdbea7157ab42b20c25edbb20be8c09bc7?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe998d95a8587035d8b6adef6108eccdbea7157ab42b20c25edbb20be8c09bc7?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe998d95a8587035d8b6adef6108eccdbea7157ab42b20c25edbb20be8c09bc7?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe998d95a8587035d8b6adef6108eccdbea7157ab42b20c25edbb20be8c09bc7?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe998d95a8587035d8b6adef6108eccdbea7157ab42b20c25edbb20be8c09bc7?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe998d95a8587035d8b6adef6108eccdbea7157ab42b20c25edbb20be8c09bc7?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                  className="w-full aspect-[2.04] max-md:max-w-full"
                />
                <div className="mt-6 text-2xl font-semibold tracking-tight leading-8 text-blue-950 max-md:max-w-full">
                  Floyka Design - Rebranding
                </div>
                <div className="mt-1.5 text-sm font-medium tracking-tight leading-5 text-slate-400 max-md:max-w-full">
                  Floyka All Branding Design - Floyka. We are building web3
                  ecosystems...
                </div>
                <div className="flex gap-1.5 self-start mt-3.5 text-base font-bold tracking-tight leading-7 text-indigo-600">
                  <div className="grow">See Project</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0147a17f61c8e00268bcc16e55a4474b3a2447f47d964172dc909aa9b4bcee49?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                    className="shrink-0 self-start aspect-[1.49] fill-indigo-600 w-[18px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 w-full max-w-[1363px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/21d3de12030c675c4baed97149b3cd707f754f88612740b6b907fc9af2d0b67e?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d3de12030c675c4baed97149b3cd707f754f88612740b6b907fc9af2d0b67e?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d3de12030c675c4baed97149b3cd707f754f88612740b6b907fc9af2d0b67e?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d3de12030c675c4baed97149b3cd707f754f88612740b6b907fc9af2d0b67e?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d3de12030c675c4baed97149b3cd707f754f88612740b6b907fc9af2d0b67e?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d3de12030c675c4baed97149b3cd707f754f88612740b6b907fc9af2d0b67e?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d3de12030c675c4baed97149b3cd707f754f88612740b6b907fc9af2d0b67e?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/21d3de12030c675c4baed97149b3cd707f754f88612740b6b907fc9af2d0b67e?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                  className="w-full aspect-[2.04] max-md:max-w-full"
                />
                <div className="mt-6 text-2xl font-semibold tracking-tight leading-8 text-blue-950 max-md:max-w-full">
                  IzmirBlockchain
                </div>
                <div className="mt-3.5 text-sm font-medium tracking-tight leading-5 text-slate-400 max-md:max-w-full">
                  {" "}
                  All Branding Design - Floyka. We are building web3
                  ecosystems...
                </div>
                <div className="flex gap-1.5 self-start mt-3.5 text-base font-bold tracking-tight leading-7 text-indigo-600">
                  <div className="grow">See Project</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0147a17f61c8e00268bcc16e55a4474b3a2447f47d964172dc909aa9b4bcee49?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                    className="shrink-0 self-start aspect-[1.49] fill-indigo-600 w-[18px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e7ea03b129f47af4857aeee918688aae49243122e29f390b8b5d70dd0c93e696?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7ea03b129f47af4857aeee918688aae49243122e29f390b8b5d70dd0c93e696?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7ea03b129f47af4857aeee918688aae49243122e29f390b8b5d70dd0c93e696?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7ea03b129f47af4857aeee918688aae49243122e29f390b8b5d70dd0c93e696?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7ea03b129f47af4857aeee918688aae49243122e29f390b8b5d70dd0c93e696?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7ea03b129f47af4857aeee918688aae49243122e29f390b8b5d70dd0c93e696?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7ea03b129f47af4857aeee918688aae49243122e29f390b8b5d70dd0c93e696?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e7ea03b129f47af4857aeee918688aae49243122e29f390b8b5d70dd0c93e696?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                  className="w-full aspect-[2.04] max-md:max-w-full"
                />
                <div className="mt-6 text-2xl font-semibold tracking-tight leading-8 text-blue-950 max-md:max-w-full">
                  Felina Project All Branding
                </div>
                <div className="mt-1.5 text-sm font-medium tracking-tight leading-5 text-slate-400 max-md:max-w-full">
                  All Branding Design - Floyka. We are building web3
                  ecosystems...
                </div>
                <div className="flex gap-1.5 self-start mt-3.5 text-base font-bold tracking-tight leading-7 text-indigo-600">
                  <div className="grow">See Project</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0147a17f61c8e00268bcc16e55a4474b3a2447f47d964172dc909aa9b4bcee49?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                    className="shrink-0 self-start aspect-[1.49] fill-indigo-600 w-[18px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 w-full max-w-[1363px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6a7d6124b2d4ebc3c6877aff4937788fac3482f2d8a5b842cde06bc2bd764b14?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a7d6124b2d4ebc3c6877aff4937788fac3482f2d8a5b842cde06bc2bd764b14?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a7d6124b2d4ebc3c6877aff4937788fac3482f2d8a5b842cde06bc2bd764b14?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a7d6124b2d4ebc3c6877aff4937788fac3482f2d8a5b842cde06bc2bd764b14?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a7d6124b2d4ebc3c6877aff4937788fac3482f2d8a5b842cde06bc2bd764b14?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a7d6124b2d4ebc3c6877aff4937788fac3482f2d8a5b842cde06bc2bd764b14?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a7d6124b2d4ebc3c6877aff4937788fac3482f2d8a5b842cde06bc2bd764b14?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6a7d6124b2d4ebc3c6877aff4937788fac3482f2d8a5b842cde06bc2bd764b14?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                  className="w-full aspect-[2.04] max-md:max-w-full"
                />
                <div className="mt-6 text-2xl font-semibold tracking-tight leading-8 text-blue-950 max-md:max-w-full">
                  Nois All Branding
                </div>
                <div className="mt-1.5 text-sm font-medium tracking-tight leading-5 text-slate-400 max-md:max-w-full">
                  {" "}
                  All Branding Design - Floyka. We are building web3
                  ecosystems...
                </div>
                <div className="flex gap-1.5 self-start mt-3.5 text-base font-bold tracking-tight leading-7 text-indigo-600">
                  <div className="grow">See Project</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0147a17f61c8e00268bcc16e55a4474b3a2447f47d964172dc909aa9b4bcee49?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                    className="shrink-0 self-start aspect-[1.49] fill-indigo-600 w-[18px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/48d64ee83daf99361ed098fd112b7ae4d002085e740fc83ca7569acd8129bde1?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/48d64ee83daf99361ed098fd112b7ae4d002085e740fc83ca7569acd8129bde1?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48d64ee83daf99361ed098fd112b7ae4d002085e740fc83ca7569acd8129bde1?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/48d64ee83daf99361ed098fd112b7ae4d002085e740fc83ca7569acd8129bde1?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/48d64ee83daf99361ed098fd112b7ae4d002085e740fc83ca7569acd8129bde1?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/48d64ee83daf99361ed098fd112b7ae4d002085e740fc83ca7569acd8129bde1?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/48d64ee83daf99361ed098fd112b7ae4d002085e740fc83ca7569acd8129bde1?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/48d64ee83daf99361ed098fd112b7ae4d002085e740fc83ca7569acd8129bde1?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                  className="w-full aspect-[2.04] max-md:max-w-full"
                />
                <div className="mt-6 text-2xl font-semibold tracking-tight leading-8 text-blue-950 max-md:max-w-full">
                  Icepale All Branding
                </div>
                <div className="mt-1.5 text-sm font-medium tracking-tight leading-5 text-slate-400 max-md:max-w-full">
                  {" "}
                  All Branding Design - Floyka. We are building web3
                  ecosystems...
                </div>
                <div className="flex gap-1.5 self-start mt-3.5 text-base font-bold tracking-tight leading-7 text-indigo-600">
                  <div className="grow">See Project</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0147a17f61c8e00268bcc16e55a4474b3a2447f47d964172dc909aa9b4bcee49?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                    className="shrink-0 self-start aspect-[1.49] fill-indigo-600 w-[18px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-end self-stretch px-20 py-7 mt-48 mb-60 bg-indigo-700 rounded-[52px] max-md:px-5 max-md:my-10 max-md:mr-2 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center px-7 py-9 mx-auto w-full font-medium bg-white rounded-3xl text-blue-950 max-md:px-5 max-md:mt-10">
                <div className="flex gap-5 justify-between self-end max-w-full text-2xl font-semibold tracking-tight leading-8 w-[230px]">
                  <div className="flex flex-col">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c3d8c23518a91867a3b23efbfc4da3bf0eaa9ece2c685a171d17212f862ad4e8?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d8c23518a91867a3b23efbfc4da3bf0eaa9ece2c685a171d17212f862ad4e8?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d8c23518a91867a3b23efbfc4da3bf0eaa9ece2c685a171d17212f862ad4e8?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d8c23518a91867a3b23efbfc4da3bf0eaa9ece2c685a171d17212f862ad4e8?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d8c23518a91867a3b23efbfc4da3bf0eaa9ece2c685a171d17212f862ad4e8?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d8c23518a91867a3b23efbfc4da3bf0eaa9ece2c685a171d17212f862ad4e8?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d8c23518a91867a3b23efbfc4da3bf0eaa9ece2c685a171d17212f862ad4e8?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c3d8c23518a91867a3b23efbfc4da3bf0eaa9ece2c685a171d17212f862ad4e8?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                      className="self-center max-w-full aspect-square w-[110px]"
                    />
                    <div className="mt-3">Meriç Kalkan</div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/066001fb8050e97714aadcfe894a07440b9c6b2f68ab597f123c7f0edd61cb9f?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                    className="shrink-0 self-start mt-4 border-2 border-solid aspect-square border-blue-950 stroke-[2px] stroke-blue-950 w-[17px]"
                  />
                </div>
                <div className="flex gap-1.5 self-center mt-2 text-xs tracking-tight leading-6 text-slate-400">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9f72fc2526faa115950422f08373192da26cc4c527e20acb84aadd1dd85eac35?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f72fc2526faa115950422f08373192da26cc4c527e20acb84aadd1dd85eac35?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f72fc2526faa115950422f08373192da26cc4c527e20acb84aadd1dd85eac35?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f72fc2526faa115950422f08373192da26cc4c527e20acb84aadd1dd85eac35?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f72fc2526faa115950422f08373192da26cc4c527e20acb84aadd1dd85eac35?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f72fc2526faa115950422f08373192da26cc4c527e20acb84aadd1dd85eac35?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f72fc2526faa115950422f08373192da26cc4c527e20acb84aadd1dd85eac35?apiKey=ba64aa5e968d4852b01efe727b474ed5&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9f72fc2526faa115950422f08373192da26cc4c527e20acb84aadd1dd85eac35?apiKey=ba64aa5e968d4852b01efe727b474ed5&"
                    className="shrink-0 self-start w-2 aspect-[0.72] fill-slate-400"
                  />
                  <div>Istanbul, Turkey</div>
                </div>
                <div className="mt-5 text-xs tracking-normal leading-4 text-center">
                  At Floyka Design Studio, a professional design studio based in
                  Turkey, we are known as a team passionate about delivering
                  creative and impressive designs with the Blockchain ecosystem.{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-sm font-medium tracking-tight leading-5 text-white text-opacity-80 max-md:mt-10">
                <div className="justify-center items-start p-4 rounded-xl border border-white border-solid max-md:pr-5">
                  Your Email
                </div>
                <div className="justify-center items-start p-4 mt-3.5 rounded-xl border border-white border-solid max-md:pr-5">
                  Job Title
                </div>
                <div className="justify-center items-start p-4 mt-3.5 rounded-xl border border-white border-solid max-md:pr-5">
                  Full Name
                </div>
                <div className="justify-center items-start px-4 py-3.5 mt-3.5 rounded-xl border border-white border-solid max-md:pr-5">
                  Estimated Budget
                </div>
                <div className="flex gap-5 justify-between mt-3.5">
                  <div className="justify-center px-6 py-4 rounded-xl border border-white border-solid max-md:px-5">
                    Start Date
                  </div>
                  <div className="justify-center items-start px-6 py-4 rounded-xl border border-white border-solid max-md:px-5">
                    End Date
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto text-sm font-medium tracking-tight leading-5 max-md:mt-10">
                <div className="items-start px-3.5 pt-4 pb-32 rounded-xl border border-white border-solid text-white text-opacity-80 max-md:pr-5 max-md:pb-10">
                  Job Description
                </div>
                <div className="px-16 pt-4 pb-2.5 mt-2.5 text-indigo-700 bg-white rounded-xl max-md:pr-7 max-md:pl-6">
                  Send Job Request!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
