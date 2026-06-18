import { useState } from "react";

function MobilePreview({ content, styleData }) {
  const [selectedRating, setSelectedRating] =
    useState(null);

  return (
    <div
      style={{
        width: "320px",
        minHeight: "600px",
        margin: "auto",
        border: "2px solid #ddd",
        borderRadius: `${styleData.borderRadius}px`,
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor:
       styleData.backgroundColor,
        boxShadow:
          "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          color: styleData.titleColor,
          fontSize:
            `${styleData.fontSize}px`,
          fontWeight:
            styleData.fontWeight,
          textAlign: "center",
        }}
      >
        {content.initialTitle ||
          "Rate Your Experience"}
      </h2>

      <p
        style={{
          color:
            styleData.subtitleColor,
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        {content.initialSubtitle}
      </p>

      <h3
        style={{
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        Rating
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          marginBottom: "20px",
        }}
      >
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            onClick={() =>
              setSelectedRating(num)
            }
            style={{
              width: "45px",
              height: "45px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              backgroundColor:
                selectedRating === num
                  ? styleData.selectedColor
                  : styleData.unselectedColor,
            }}
          >
            {num}
          </button>
        ))}
      </div>

      {content.options.map(
        (option, index) => (
          <div
            key={index}
            style={{
              marginBottom: "10px",
            }}
          >
            <label>
              <input
                type="radio"
                name="feedback"
              />
              {" "}
              {option}
            </label>
          </div>
        )
      )}

      {content.showComment && (
        <textarea
          placeholder="Write your feedback"
          style={{
            width: "100%",
            height: "80px",
            padding: "8px",
            marginTop: "10px",
          }}
        />
      )}

      <br />
      <br />

      <button
        style={{
          backgroundColor:
            styleData.buttonColor,
          color:
            styleData.buttonTextColor,
          width:
            `${styleData.buttonWidth}%`,
          height:
            `${styleData.buttonHeight}px`,
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {content.submitButtonText}
      </button>

      <br />
      <br />

      {content.thankYouImage && (
        <img
          src={content.thankYouImage}
          alt="Thank You"
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
      )}

      <h3
        style={{
          marginTop: "15px",
        }}
      >
        {content.thankYouTitle}
      </h3>

      <p>{content.thankYouSubtitle}</p>

      <button
        style={{
          backgroundColor:
            styleData.buttonColor,
          color:
            styleData.buttonTextColor,
          width: "100%",
          height: "40px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {content.thankYouButtonText}
      </button>
    </div>
  );
}

export default MobilePreview;