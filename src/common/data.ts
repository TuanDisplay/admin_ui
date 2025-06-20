export const dataField = [
  { id: 0, name: "Ẩm thực", value: "food" },
  { id: 1, name: "Giáo dục", value: "education" },
  { id: 2, name: "Công nghệ", value: "technology" },
  { id: 3, name: "Y tế", value: "health" },
  { id: 4, name: "Môi trường", value: "environment" },
  { id: 5, name: "Giải trí", value: "entertainment" },
  { id: 6, name: "Kinh doanh", value: "business" },
  { id: 7, name: "Du lịch & Dịch vụ", value: "service" },
  { id: 8, name: "Thể thao", value: "sport" },
  { id: 9, name: "Nông nghiệp", value: "agriculture" },
  { id: 10, name: "Thời trang", value: "fashion" },
  { id: 11, name: "Tâm lý", value: "pyschology" },
  { id: 12, name: "Nghệ thuật", value: "art" },
  { id: 13, name: "Tài chính & Đầu tư", value: "finance" },
];

export const dataMemberType = [
  { id: 0, name: "Phổ thông", value: "free" },
  { id: 1, name: "Cao cấp", value: "premium" },
];

export const dataVisible = [
  { id: 0, name: "Hiện", value: "1:0" },
  { id: 1, name: "Ẩn", value: "1:1" },
];

export const dataAccept = [
  {
    id: 0,
    name: "Sản phẩm đã duyệt",
    value: "1:0",
  },
  {
    id: 1,
    name: "Sản phẩm chờ duyệt",
    value: "0:0",
  },
  {
    id: 2,
    name: "Sản phẩm bị ẩn",
    value: "1:1",
  },
];

export const dataPriceRange = [
  { id: 1, name: "Dưới 1 triệu", value: "tier1" },
  { id: 2, name: "Từ 1 - 3 triệu", value: "tier2" },
  { id: 3, name: "Từ 3 - 5 triệu", value: "tier3" },
  { id: 4, name: "Trên 5 triệu", value: "tier4" },
];

export const dataIdea = [
  {
    id: "1",
    title: "Chế tạo kệ bằng nhạc cụ từ các nhạc phẩm tái chế ",
    author: "Nguyễn Anh Huy",
    visible: 1,
    lastUpdate: "Jul 13. 2013 at 3:38 AM",
  },
  {
    id: "2",
    title: "Chế tạo kệ bằng nhạc cụ từ các nhạc phẩm tái chế ",
    author: "Lê Viết Tuấn",
    visible: 0,
    lastUpdate: "Jul 13. 2013 at 3:38 AM",
  },
];

export const dataUser = [
  {
    id: "1",
    name: "Nguyễn Bảo Anh Huy",
    email: "nguyenbaoanhhuy6@gmail.com",
    visible: 1,
  },
  {
    id: "2",
    name: "Lê Viết Tuấn",
    email: "leviettuan28052003@gmail.com",
    visible: 1,
  },
];

export const IdeaCard = [
  {
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
  },

  {
    id: "2",
    imageUrl: "/thumbnail/dragon-fruit.jpg",
    catValue: "agriculture",
    title: "Phương pháp giảm sâu bọ cho cây trồng ban đêm",
    desc: "Giải pháp hiệu quả giúp bảo vệ cây trồng khỏi sâu bọ vào ban đêm một cách an toàn và bền vững.",
    benefitValue:
      "Đèn ánh sáng tím hoặc xanh dương có khả năng thu hút côn trùng vào ban đêm.Kết hợp với lưới điện hoặc bẫy dính sẽ tiêu diệt côn trùng hiệu quả mà không ảnh hưởng đến cây trồng. Lưu ý không nên dùng ánh sáng trắng mạnh quá, có thể làm rối loạn sinh học cây.",
    author: "Trần Bảo Anh Huy",
    price: 2500000,
    views: 12,
    publishDate: "25/01/2025",
    image: [
      "/thumbnail/carpet.jpg",
      "/thumbnail/instrument.jpg",
      "/thumbnail/start-up.jpg",
    ],
  },
  {
    id: "3",
    imageUrl: "/thumbnail/start-up.jpg",
    catValue: "business",
    title: "Phương pháp giảm sâu bọ cho cây trồng ban đêm",
    desc: "Giải pháp hiệu quả giúp bảo vệ cây trồng khỏi sâu bọ vào ban đêm một cách an toàn và bền vững.",
    benefitValue:
      "Đèn ánh sáng tím hoặc xanh dương có khả năng thu hút côn trùng vào ban đêm.Kết hợp với lưới điện hoặc bẫy dính sẽ tiêu diệt côn trùng hiệu quả mà không ảnh hưởng đến cây trồng. Lưu ý không nên dùng ánh sáng trắng mạnh quá, có thể làm rối loạn sinh học cây.",
    author: "Trần Bảo Anh Huy",
    price: 5500000,
    views: 12,
    publishDate: "25/01/2025",
    image: [
      "/thumbnail/carpet.jpg",
      "/thumbnail/instrument.jpg",
      "/thumbnail/start-up.jpg",
    ],
  },

  {
    id: "4",
    imageUrl: "/thumbnail/climate-change.jpg",
    catValue: "environment",
    title: "Chế tạo kệ bằng nhạc cụ từ các nhạc phẩm tái chế",
    desc: "Bạn có thể tái chế, trang trí cây đàn ghita, piano thành những chiếc kệ gỗ, kệ sách trưng bày ấn tượng.",
    benefitValue:
      "Giảm lượng rác thải - Những nhạc cụ cũ, hỏng hoặc không còn sử dụng được nếu bỏ đi sẽ gây lãng phí và ô nhiễm. Việc tái sử dụng giúp kéo dài vòng đời của chúng.",
    author: "Lê Viết Tuấn",
    price: 100000,
    views: 80,
    publishDate: "25/01/2025",
    image: [
      "/thumbnail/carpet.jpg",
      "/thumbnail/instrument.jpg",
      "/thumbnail/start-up.jpg",
    ],
  },

  {
    id: "5",
    imageUrl: "/thumbnail/dragon-fruit.jpg",
    catValue: "agriculture",
    title: "Phương pháp giảm sâu bọ cho cây trồng ban đêm",
    desc: "Giải pháp hiệu quả giúp bảo vệ cây trồng khỏi sâu bọ vào ban đêm một cách an toàn và bền vững.",
    benefitValue:
      "Đèn ánh sáng tím hoặc xanh dương có khả năng thu hút côn trùng vào ban đêm.Kết hợp với lưới điện hoặc bẫy dính sẽ tiêu diệt côn trùng hiệu quả mà không ảnh hưởng đến cây trồng. Lưu ý không nên dùng ánh sáng trắng mạnh quá, có thể làm rối loạn sinh học cây.",
    author: "Trần Bảo Anh Huy",
    price: 1000000,
    views: 12,
    publishDate: "25/01/2025",
    image: [
      "/thumbnail/carpet.jpg",
      "/thumbnail/instrument.jpg",
      "/thumbnail/start-up.jpg",
    ],
  },
  {
    id: "6",
    imageUrl: "/thumbnail/start-up.jpg",
    catValue: "business",
    title: "Phương pháp giảm sâu bọ cho cây trồng ban đêm",
    desc: "Giải pháp hiệu quả giúp bảo vệ cây trồng khỏi sâu bọ vào ban đêm một cách an toàn và bền vững.",
    benefitValue:
      "Đèn ánh sáng tím hoặc xanh dương có khả năng thu hút côn trùng vào ban đêm.Kết hợp với lưới điện hoặc bẫy dính sẽ tiêu diệt côn trùng hiệu quả mà không ảnh hưởng đến cây trồng. Lưu ý không nên dùng ánh sáng trắng mạnh quá, có thể làm rối loạn sinh học cây.",
    author: "Trần Bảo Anh Huy",
    price: 500000,
    views: 12,
    publishDate: "25/01/2025",
    image: [
      "/thumbnail/carpet.jpg",
      "/thumbnail/instrument.jpg",
      "/thumbnail/start-up.jpg",
    ],
  },
];
