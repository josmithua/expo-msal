package energy.stash.msal

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoMsalModule : Module() {
  override fun definition() = ModuleDefinition {
    name("ExpoMsal")

    function("helloAsync") { options: Map<String, String> ->
      println("Hello 👋")
    }

    viewManager {
      view { context -> 
        ExpoMsalView(context) 
      }

      prop("name") { view: ExpoMsalView, prop: String ->
        println(prop)
      }
    }
  }
}
