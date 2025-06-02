// interface IIdeaDeMana {
//   id: string;
//   imageUrl: string;
//   catValue: string;
//   publishDate: string;
//   author: string;
//   desc: string;
//   title: string;
//   views: number;
//   customer_id: string;
//   price: number;
//   benefitValue: string;
//   image: string[];
//   imageIP: string;
//   isIP: number;
// }

import Button from "~/components/Button";

const data = {
  id: "1",
  imageUrl: "/thumbnail/climate-change.jpg",
  catValue: "environment",
  title: "Chế tạo kệ bằng nhạc cụ từ các nhạc phẩm tái chế",
  desc: "Bạn có thể tái chế, trang trí cây đàn ghita, piano thành những chiếc kệ gỗ, kệ sách trưng bày ấn tượng.",
  benefitValue:
    "Giảm lượng rác thải - Những nhạc cụ cũ, hỏng hoặc không còn sử dụng được nếu bỏ đi sẽ gây lãng phí và ô nhiễm. Việc tái sử dụng giúp kéo dài vòng đời của chúng.",
  author: "Lê Viết Tuấn",
  price: 1500000,
  views: 80,
  publishDate: "25/01/2025",
  image: [
    "/thumbnail/carpet.jpg",
    "/thumbnail/instrument.jpg",
    "/thumbnail/start-up.jpg",
  ],
  is_intellect: 1,
};

export default function ProblemDeMana() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-800">{data.title}</h1>

      {/* Info grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
        <div>
          <strong>Customer Name:</strong> {data.author}
        </div>
        <div>
          <strong>Industry:</strong> {data.catValue}
        </div>
        <div>
          <strong>Post Date:</strong> {data.publishDate}
        </div>
        <div>
          <strong>Price:</strong> {data.price.toLocaleString()} đ
        </div>
        <div>
          <strong>Views:</strong> {data.views}
        </div>
        <div>
          <strong>Intellectual Property:</strong>{" "}
          {data.is_intellect ? "Yes" : "No"}
        </div>
      </div>

      {/* Content */}
      <div>
        <h2 className="text-xl font-bold mt-4 mb-2">Description</h2>
        <p className="text-gray-800 whitespace-pre-line">{data.desc}</p>
      </div>

      {/* Value Benefits */}
      <div>
        <h2 className="text-xl font-bold mt-4 mb-2">Value & Benefits</h2>
        <p className="text-gray-800 whitespace-pre-line">{data.benefitValue}</p>
      </div>

      {/* Intellectual Image */}
      {data.imageUrl && (
        <div>
          <h2 className="text-xl font-bold mt-4 mb-2">
            Intellectual Property Image
          </h2>
          <img
            src={data.imageUrl}
            alt="Intellectual Property"
            className="rounded border border-gray-300 w-full max-w-md"
          />
        </div>
      )}

      {/* Image Gallery */}
      {data.image.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mt-4 mb-2">Idea Images</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.image.map((img, index) => (
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
  );
}
