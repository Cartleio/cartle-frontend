"use client";
import Link from "next/link";

function CampaignTable({ data, tableType, lastUpadted }: any) {
  return (
    <div className="py-8 flex flex-col gap-8">
      <section className="p-5 border rounded-lg shadow-sm flex flex-col gap-8">
        <div className="flex items-center justify-between w-full">
          <strong className="text-lg lg:text-2xl text-[#444748] capitalize">
            {tableType}
          </strong>
          <p className="text-[#979DA0] text-xs md:text-sm">{lastUpadted}</p>
        </div>

        <div className=" w-full text-center h-60 overflow-auto">
          <table className="w-full min-w-[600px] text-gray-700  rounded-sm">
            <thead>
              <tr>
                <th>Date Created</th>
                <th>Campaign Name</th>
                <th>Campaign reach</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody className="">
              {data.map((campaign: any) => (
                <tr key={campaign.id}>
                  <td>
                    <Link href={`/merchant/customers/${campaign.id}`}>
                      {campaign?.date_created}
                    </Link>
                  </td>
                  <td>{campaign?.campaign_name}</td>
                  <td>{campaign?.campaign_reach}</td>

                  <td className="text-orange-500 text-sm">published</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default CampaignTable;
