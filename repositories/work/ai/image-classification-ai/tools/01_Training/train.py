from requests import request
import tensorflow as tf
import pathlib

from tensorflow.keras import layers
from tensorflow.keras.models import Sequential

def train(model):
    data_dir = pathlib.Path("../../docs/model_"+model)
    image_count = len(list(data_dir.glob('*/*.jpg')))
    print(str(image_count) + " images in model...")

    # Define photo information
    batch_size = 32
    with open("Training/meta.csv") as data:
        buffer = data.split(",")
        img_height = buffer[0]
        img_width = buffer[1]

    # Define the training dataset
    train_ds = tf.keras.utils.image_dataset_from_directory(
        data_dir,
        validation_split=0.2,
        subset="training",
        seed=123,
        image_size=(img_height, img_width),
        batch_size=batch_size)

    # Sanity check
    class_names = train_ds.class_names
    print(class_names)

    # Define the model
    num_classes = len(class_names)

    model = Sequential([
        layers.Rescaling(1./255, input_shape=(img_height, img_width, 3)),
        layers.Conv2D(16, 3, padding='same', activation='relu'),
        layers.MaxPooling2D(),
        layers.Conv2D(32, 3, padding='same', activation='relu'),
        layers.MaxPooling2D(),
        layers.Conv2D(64, 3, padding='same', activation='relu'),
        layers.MaxPooling2D(),
        layers.Flatten(),
        layers.Dense(128, activation='relu'),
        layers.Dense(num_classes)
    ])

    # Compile the model
    model.compile(optimizer='adam',
                  loss=tf.keras.losses.SparseCategoricalCrossentropy(
                      from_logits=True),
                  metrics=['accuracy'])

    # Train the model
    epochs = 10
    history = model.fit(
        train_ds,
        epochs=epochs
    )

    model.save('model')
    with open("modeldetails.txt", "w") as details:
        details.write(str(",".join(class_names)) + "\n" +
                      str(img_height) + "\n" + str(img_width))
        details.close()
