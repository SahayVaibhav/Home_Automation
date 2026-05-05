import { ChevronLeft, Film, MoonStar, Plus, Sparkles, Undo2 } from 'lucide-react';

const iconMap = {
  'Leave Home': Undo2,
  'Welcome Home': Undo2,
  'Movie Mode': Film,
  'Good Night': MoonStar,
};

const tintMap = {
  'Leave Home': 'bg-red-50 text-red-400',
  'Welcome Home': 'bg-orange-50 text-orange-400',
  'Movie Mode': 'bg-purple-50 text-purple-400',
  'Good Night': 'bg-blue-50 text-blue-400',
};

function ScenesPage({ activeScene, onActivateScene, scenes }) {
  return (
    <div className="space-y-7 pb-2">
      <header className="flex items-center pt-2">
        <button className="tap-scale -ml-1 p-1 text-pulse-text" type="button">
          <ChevronLeft className="h-6 w-6" />
        </button>
        <h1 className="flex-1 pr-5 text-center text-lg font-bold text-pulse-text">Scenes</h1>
      </header>

      <section>
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-pulse-muted">
          Preset Scenes
        </h2>
        <div className="space-y-4">
          {scenes.map((scene) => {
            const Icon = iconMap[scene.name] || Sparkles;
            const selected = activeScene === scene.name;

            return (
              <button
                key={scene.id}
                className={`flex w-full items-center rounded-2xl border bg-white p-4 text-left shadow-sm transition ${
                  selected ? 'border-pulse-accent' : 'border-gray-100'
                }`}
                onClick={() => onActivateScene(scene.name)}
                type="button"
              >
                <div className={`mr-4 flex h-12 w-12 items-center justify-center rounded-xl ${tintMap[scene.name]}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-pulse-text">{scene.name}</h3>
                  <p className="text-xs leading-relaxed text-pulse-muted">{scene.description}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <button
        className="tap-scale flex w-full items-center justify-center gap-2 rounded-xl bg-pulse-accent py-4 font-semibold text-white shadow-lg shadow-[#7A1F1F]/20"
        type="button"
      >
        <Plus className="h-5 w-5" />
        <span>Create New Scene</span>
      </button>
    </div>
  );
}

export default ScenesPage;
