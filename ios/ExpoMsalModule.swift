import ExpoModulesCore

public class ExpoMsalModule: Module {
  public func definition() -> ModuleDefinition {
    name("ExpoMsal")

    function("helloAsync") { (options: [String: String]) in
      print("Hello 👋")
    }

    viewManager {
      view {
        ExpoMsalView()
      }

      prop("name") { (view: ExpoMsalView, prop: String) in
        print(prop)
      }
    }
  }
}
