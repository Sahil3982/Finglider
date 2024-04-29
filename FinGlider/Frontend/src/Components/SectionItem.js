import React from "react";

function SectionItem(props) {
  const sectionItem = props.SectionItem;
  return (
    <div class="cat-item px-3 py-3">
      <a
        class="bg-white rounded d-block p-1 text-center text-black-75"
        style={{ minHeight: 100, minWidth: 80, fontSize: "15px" }}
        href=""
      >
        <p class="m-2 medium">{sectionItem.SectionName}</p>
      </a>
      {/* <a class="bg-white rounded d-block p-2 text-center shadow-sm">
              <p></p>
                <p class="m-0 medium" >{sectionItem.SectionName}</p>
            </a> */}
    </div>
  );
}

export default SectionItem;
