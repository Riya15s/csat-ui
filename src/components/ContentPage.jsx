function ContentPage({ content, setContent }) {

  const addOption = () => {
    setContent({
      ...content,
      options: [...content.options, ""],
    });
  };

  const updateOption = (index, value) => {
    const updated = [...content.options];

    updated[index] = value;

    setContent({
      ...content,
      options: updated,
    });
  };

  const deleteOption = (index) => {
    const updated = content.options.filter(
      (_, i) => i !== index
    );

    setContent({
      ...content,
      options: updated,
    });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);

      setContent({
        ...content,
        thankYouImage: imageUrl,
      });
    }
  };

  return (
    <div>
      <h2>Initial Feedback</h2>

      <input
        type="text"
        placeholder="Enter Title"
        value={content.initialTitle}
        onChange={(e) =>
          setContent({
            ...content,
            initialTitle: e.target.value,
          })
        }
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter Subtitle"
        value={content.initialSubtitle}
        onChange={(e) =>
          setContent({
            ...content,
            initialSubtitle: e.target.value,
          })
        }
      />

      <br />
      <br />

      <h2>Feedback Options</h2>

      <button onClick={addOption}>
        Add Option
      </button>

      <br />
      <br />

      {content.options.map((option, index) => (
        <div key={index}>
          <input
            type="text"
            value={option}
            placeholder={`Option ${index + 1}`}
            onChange={(e) =>
              updateOption(index, e.target.value)
            }
          />

         <button onClick={() => deleteOption(index)}>
              Delete
     </button>

          <br />
          <br />
        </div>
      ))}

      <h2>Additional Comment</h2>

      <label>
        <input
          type="checkbox"
          checked={content.showComment}
          onChange={(e) =>
            setContent({
              ...content,
              showComment: e.target.checked,
            })
          }
        />
         Enable Comment Box
      </label>

      <br />
      <br />

      <h2>Submit Button Text</h2>

      <input
        type="text"
        placeholder="Enter Submit Button Text"
        value={content.submitButtonText}
        onChange={(e) =>
          setContent({
            ...content,
            submitButtonText: e.target.value,
          })
        }
      />

      <br />
      <br />

      <h2>Thank You Image</h2>

      <input
        type="file"
        accept=".png,.jpg,.jpeg,.gif"
        onChange={handleImage}
      />

      <br />
      <br />

      <h2>Thank You Title</h2>

      <input
        type="text"
        placeholder="Enter Thank You Title"
        value={content.thankYouTitle}
        onChange={(e) =>
          setContent({
            ...content,
            thankYouTitle: e.target.value,
          })
        }
      />

      <br />
      <br />

      <h2>Thank You Subtitle</h2>

      <input
        type="text"
        placeholder="Enter Thank You Subtitle"
        value={content.thankYouSubtitle}
        onChange={(e) =>
          setContent({
            ...content,
            thankYouSubtitle: e.target.value,
          })
        }
      />

      <br />
      <br />

      <h2>Thank You Button Text</h2>

      <input
        type="text"
        placeholder="Enter Thank You Button Text"
        value={content.thankYouButtonText}
        onChange={(e) =>
          setContent({
            ...content,
            thankYouButtonText: e.target.value,
          })
        }
      />

      <br />
      <br />
    </div>
  );
}

export default ContentPage;