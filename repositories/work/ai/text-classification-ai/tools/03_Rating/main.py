import sys
import gi
gi.require_version('Gtk', '4.0')
gi.require_version('Adw', '1')
from gi.repository import Gtk, Adw


class MainWindow(Gtk.ApplicationWindow):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.builder = Gtk.Builder.new()
        self.builder.new_from_file("rating.ui")
        self.builder.get_object("rating_window")
        self.set_default_size(600, 600)
        self.set_title("CyberAcuity Rating Program")

class MyApp(Adw.Application):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.connect('activate', self.on_activate)

    def on_activate(self, app):
        self.win = MainWindow(application=app)
        self.win.present()

app = MyApp(application_id="com.cyberacuity.RatingApplication")
app.run(sys.argv)