fn main() -> wry::Result<()> {
    use wry::{
      application::{
        event::{Event, WindowEvent},
        event_loop::{ControlFlow, EventLoop},
        window::{ Fullscreen, WindowBuilder },
      },
      webview::WebViewBuilder,
    };

    use whoami;
  
    let event_loop = EventLoop::new();
    let window = WindowBuilder::new()
    .with_title("system.desktop")
      .with_decorations(false)
      .with_resizable(false)
      .build(&event_loop)
      .unwrap();

    let webview = WebViewBuilder::new(window)?
      .with_url(include_str!("index.html"))?
      .build()?;
  
    event_loop.run(move |event, _, control_flow| {
      *control_flow = ControlFlow::Wait;
  
      match event {
        Event::WindowEvent {
          event: WindowEvent::CloseRequested,
          ..
        } => *control_flow = ControlFlow::Exit,
        _ => {
          let _ = webview.resize();
        }
      }
    });
  }