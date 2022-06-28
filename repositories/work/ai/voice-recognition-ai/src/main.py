from ..tools.Training import main
import tensorflow as tf

sample_file = 'test.wav'
sample_ds = main.preprocess_dataset([str(sample_file)])
model = tf.keras.models.load_model('model')

for spectrogram, label in sample_ds.batch(1):
    prediction = model(spectrogram)
    print(tf.nn.softmax(prediction[0]))
