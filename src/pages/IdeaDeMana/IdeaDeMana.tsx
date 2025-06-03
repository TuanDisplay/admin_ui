import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type { IProductDeMana } from "~/common/types";
import Button from "~/components/Button";
import * as productService from "~/services/product.service";
import {
  convertCategoryName,
  convertCurrencyVN,
  convertStringToHtml,
} from "~/utils/files";
import LoadingScreen from "~/layouts/component/LoadingScreen";

function IdeaDeManaUI({ idea_id }: { idea_id: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["ideaDeMana", idea_id],
    queryFn: async (): Promise<IProductDeMana> => {
      const res = await productService.ideaWattingDe(idea_id);
      return res.data;
    },
  });

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="max-w-5xl mx-auto p-6 space-y-6">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-gray-800">
            {data?.ideasname}
          </h1>

          {/* Info grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <strong>Customer Name:</strong> {data?.customer_name}
            </div>
            <div>
              <strong>Industry:</strong> {convertCategoryName(data?.industry)}
            </div>
            {/* <div>
          <strong>Post Date:</strong> {data.}
        </div> */}
            <div>
              <strong>Price:</strong> {convertCurrencyVN(data?.price)}
            </div>
            <div>
              <strong>Views:</strong> {data?.view}
            </div>
            <div>
              <strong>Intellectual Property:</strong>{" "}
              {data?.image_intellect ? "Yes" : "No"}
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-xl font-bold mt-4 mb-2">Description</h2>
            <p
              className="text-gray-800 whitespace-pre-line"
              dangerouslySetInnerHTML={convertStringToHtml(
                data?.content_detail
              )}
            ></p>
          </div>

          {/* Value Benefits */}
          <div>
            <h2 className="text-xl font-bold mt-4 mb-2">Value & Benefits</h2>
            <p
              className="text-gray-800 whitespace-pre-line "
              dangerouslySetInnerHTML={convertStringToHtml(
                data?.value_benefits
              )}
            ></p>
          </div>

          {/* Intellectual Image */}
          {data?.image_intellect && (
            <div>
              <h2 className="text-xl font-bold mt-4 mb-2">
                Intellectual Property Image
              </h2>
              <img
                src={data.image_intellect}
                alt="Intellectual Property"
                className="rounded border border-gray-300 w-full max-w-md"
              />
            </div>
          )}

          {/* Image Gallery */}
          {data && data.image.length > 0 && (
            <div>
              <h2 className="text-xl font-bold mt-4 mb-2">Idea Images</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {data?.image.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Idea Image ${index + 1}`}
                    className="rounded border border-gray-300 w-full"
                  />
                ))}
              </div>
            </div>
          )}
          <div className="flex gap-4 justify-end mb-5">
            <Button className="px-3 py-2" confirm>
              Confirm
            </Button>
            <Button className="px-4 py-2" cancel>
              Delete
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default function IdeaDeMana() {
  const { ideaId } = useParams();

  if (!ideaId) return <>Không tìm thấy id trên path</>;
  return <IdeaDeManaUI idea_id={ideaId} />;
}
