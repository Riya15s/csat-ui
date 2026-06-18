function StylingPage({ styleData, setStyleData }) {
  return (
    <div>
      <h2>Styling Page</h2>

      <h3>Background Color</h3>
      <input
        type="color"
        value={styleData.backgroundColor}
        onChange={(e) =>
          setStyleData({
            ...styleData,
            backgroundColor: e.target.value,
          })
        }
      />

      <h3>Title Color</h3>
      <input
        type="color"
        value={styleData.titleColor}
        onChange={(e) =>
          setStyleData({
            ...styleData,
            titleColor: e.target.value,
          })
        }
      />

      <h3>Subtitle Color</h3>
      <input
        type="color"
        value={styleData.subtitleColor}
        onChange={(e) =>
          setStyleData({
            ...styleData,
            subtitleColor: e.target.value,
          })
        }
      />

      <h3>Button Color</h3>
      <input
        type="color"
        value={styleData.buttonColor}
        onChange={(e) =>
          setStyleData({
            ...styleData,
            buttonColor: e.target.value,
          })
        }
      />

      <h3>Button Text Color</h3>
      <input
        type="color"
        value={styleData.buttonTextColor}
        onChange={(e) =>
          setStyleData({
            ...styleData,
            buttonTextColor: e.target.value,
          })
        }
      />

      <h3>Selected Rating Color</h3>
      <input
        type="color"
        value={styleData.selectedColor}
        onChange={(e) =>
          setStyleData({
            ...styleData,
            selectedColor: e.target.value,
          })
        }
      />

      <h3>Unselected Rating Color</h3>
      <input
        type="color"
        value={styleData.unselectedColor}
        onChange={(e) =>
          setStyleData({
            ...styleData,
            unselectedColor: e.target.value,
          })
        }
      />

      <h3>Font Size</h3>
      <input
        type="number"
        value={styleData.fontSize}
        onChange={(e) =>
          setStyleData({
            ...styleData,
            fontSize: e.target.value,
          })
        }
      />

      <h3>Font Weight</h3>
      <input
        type="number"
        value={styleData.fontWeight}
        onChange={(e) =>
          setStyleData({
            ...styleData,
            fontWeight: e.target.value,
          })
        }
      />

      <h3>Border Radius</h3>
      <input
        type="number"
        value={styleData.borderRadius}
        onChange={(e) =>
          setStyleData({
            ...styleData,
            borderRadius: e.target.value,
          })
        }
      />

      <h3>Button Width</h3>
      <input
        type="number"
        value={styleData.buttonWidth}
        onChange={(e) =>
          setStyleData({
            ...styleData,
            buttonWidth: e.target.value,
          })
        }
      />

      <h3>Button Height</h3>
      <input
        type="number"
        value={styleData.buttonHeight}
        onChange={(e) =>
          setStyleData({
            ...styleData,
            buttonHeight: e.target.value,
          })
        }
      />
    </div>
  );
}

export default StylingPage;