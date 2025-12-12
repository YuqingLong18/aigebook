import { Checkpoint } from "./components/Checkpoint";
import { GuidedSteps } from "./components/GuidedSteps";
import { InfoCard } from "./components/InfoCard";
import { SectionBlock } from "./components/SectionBlock";
import { DepthExpressivenessDemo } from "./demos/DepthExpressivenessDemo";
import { FeatureHierarchyDemo } from "./demos/FeatureHierarchyDemo";
import { LossLandscapeDemo } from "./demos/LossLandscapeDemo";
import { PretrainingFlowDemo } from "./demos/PretrainingFlowDemo";
import { StepApproxDemo } from "./demos/StepApproxDemo";
import { SuccessFactorsDemo } from "./demos/SuccessFactorsDemo";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-5xl px-4 py-10 lg:px-6">
        <header className="mb-8 rounded-3xl bg-white/90 p-6 shadow-soft ring-1 ring-slate-200">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-600">Section 2.8</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Deep Learning Basics</h1>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-700">
            Deep learning builds multi-layer neural networks that can simulate the brain&apos;s
            hierarchical processing. This guided lesson mirrors the book&apos;s flow while adding
            small, browser-only demos to make each idea tangible.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-600">
            <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand-700">
              DNNs
            </span>
            <span className="rounded-full bg-emerald-50 px-3 py-1 font-semibold text-emerald-700">
              Training difficulty
            </span>
            <span className="rounded-full bg-orange-50 px-3 py-1 font-semibold text-orange-700">
              Pre-training
            </span>
            <span className="rounded-full bg-indigo-50 px-3 py-1 font-semibold text-indigo-700">
              Hierarchical features
            </span>
          </div>
        </header>

        <main className="space-y-6">
          <SectionBlock title="Learning Objectives">
            <ul className="grid gap-2 text-sm leading-relaxed text-slate-700 md:grid-cols-2">
              <li>
                Understand the basic concepts of deep learning, the characteristics of deep neural
                networks, and how they differ from traditional machine learning.
              </li>
              <li>
                Recognize why training deep networks is difficult and the role and limits of
                backpropagation.
              </li>
              <li>
                Master Hinton&apos;s pre-training method and why it solved deep network training
                challenges.
              </li>
              <li>
                Understand hierarchical feature learning, abstractness, and conceptualization in
                higher layers.
              </li>
              <li>
                Recognize why deep learning flourished—big data, computing resources, and
                open-source sharing.
              </li>
            </ul>
          </SectionBlock>

          <SectionBlock title="Opening Idea" eyebrow="Introduction">
            <p className="text-sm leading-relaxed text-slate-700">
              Deep learning relies on multi-layer neural networks. Adding more layers improves
              expressive power for complex classification or fitting problems and imitates the
              brain&apos;s hierarchical processing. This shift turned neural networks from simple
              function-fitting tools into information processing systems akin to the human brain.
            </p>
          </SectionBlock>

          <SectionBlock id="dnn" title="1. Deep Neural Networks" eyebrow="Core concept">
            <InfoCard title="1) Basic Concepts">
              <p>
                A neural network with more than two hidden layers is called a deep neural network
                (DNN). Given the same total number of neurons, making a network deeper instead of
                simply wider can yield stronger expressive power.
              </p>
              <p>
                Multi-layer models are often referred to as deep learning. Today deep neural
                networks are the most widely used deep learning model, so deep learning can be seen
                as learning based on deep neural networks.
              </p>
            </InfoCard>

            <DepthExpressivenessDemo />
            <GuidedSteps
              steps={[
                "Set a depth of at least 3 hidden layers to simulate a DNN.",
                "Compare what happens when width grows but depth stays shallow.",
                "Watch the expressive score and hierarchy depth respond.",
              ]}
            />
            <Checkpoint
              prompt="Why does adding depth (not just width) strengthen a DNN?"
              options={[
                {
                  label: "Deeper stacks enable multi-stage feature composition without exploding parameters.",
                  correct: true,
                  explanation:
                    "Depth reuses neurons across layers, enabling hierarchical abstractions at similar budgets.",
                },
                {
                  label: "Depth only improves because gradients are larger.",
                  correct: false,
                  explanation: "Gradient scale alone does not explain expressive power.",
                },
                {
                  label: "Width always beats depth when neurons are fixed.",
                  correct: false,
                  explanation: "The text notes the opposite: depth wins under equal neuron budgets.",
                },
              ]}
            />
          </SectionBlock>

          <SectionBlock title="2) Difficulties in Training Deep Neural Networks">
            <p className="text-sm leading-relaxed text-slate-700">
              Despite stronger expressive power, deep networks were once neglected. The universal
              approximation theorem suggested a single hidden layer could approximate any continuous
              function given enough neurons, and deeper networks were hard to train in practice.
              Backpropagation is a gradient descent method—on complex loss surfaces with many local
              minima or saddle plateaus, training can stall or fall into poor valleys.
            </p>
            <LossLandscapeDemo />
            <GuidedSteps
              steps={[
                "Start from a random point on the loss curve.",
                "Take gradient steps and observe how easily you get stuck.",
                "Adjust the learning rate to see overshooting or plateaus.",
              ]}
            />
            <Checkpoint
              prompt="What makes training deep networks difficult in practice?"
              options={[
                {
                  label: "Loss surfaces with many valleys and saddle-like plateaus trap gradient descent.",
                  correct: true,
                  explanation:
                    "The VGG-like surface example shows numerous local minima and saddles that slow training.",
                },
                {
                  label: "Backpropagation cannot run on GPUs.",
                  correct: false,
                  explanation: "Hardware support is not the core difficulty described here.",
                },
                {
                  label: "Deep networks violate the universal approximation theorem.",
                  correct: false,
                  explanation: "The theorem applies; the challenge is optimization, not expressiveness.",
                },
              ]}
            />
          </SectionBlock>

          <SectionBlock title="Extended Reading: Universal Approximation Theorem">
            <InfoCard title="Key Idea">
              <p>
                Even a simple neural network with a single hidden layer can approximate any
                continuous function if it has enough hidden nodes. The classic proof uses step
                activation functions to form rectangular window functions that sum to match the
                target curve.
              </p>
            </InfoCard>
            <StepApproxDemo />
            <GuidedSteps
              steps={[
                "Pick the target shape (bump or wave).",
                "Increase hidden node pairs to add more rectangular windows.",
                "Watch the mean error shrink, showing approximation improves with more pairs.",
              ]}
            />
            <Checkpoint
              prompt="How do step activations help approximate arbitrary continuous functions?"
              options={[
                {
                  label: "Pairs of step units form small rectangular windows that sum into the target curve.",
                  correct: true,
                  explanation:
                    "Each window covers a slice of the domain; enough windows approximate the whole function.",
                },
                {
                  label: "Only sigmoid activations can approximate functions.",
                  correct: false,
                  explanation: "The text highlights step functions as a valid construction.",
                },
                {
                  label: "Approximation requires infinitely many layers.",
                  correct: false,
                  explanation: "A single hidden layer suffices if it has enough nodes.",
                },
              ]}
            />
          </SectionBlock>

          <SectionBlock title="3) Hinton's Pre-training Method">
            <p className="text-sm leading-relaxed text-slate-700">
              Geoffrey Hinton proposed a layer-wise pre-training method in 2006. Train a shallow
              Restricted Boltzmann Machine (RBM), freeze it, use its output as input to the next
              RBM, and stack the models. After pre-training, connect them, invert to form a decoder,
              and fine-tune with a small amount of data to get a high-performance deep autoencoder.
            </p>
            <InfoCard title="Extended Reading: Restricted Boltzmann Machine">
              <p>
                An RBM is a generative stochastic neural network with a visible layer and a hidden
                layer. Connections exist only between layers, not within a layer. Training adjusts
                weights so the visible layer&apos;s distribution matches the training data. After
                training, the hidden layer vector h captures the feature representation of input x.
              </p>
            </InfoCard>
            <PretrainingFlowDemo />
            <GuidedSteps
              steps={[
                "Walk through RBM1 → RBM2 → RBM3 stacking.",
                "Note that each layer learns from the frozen previous layer outputs.",
                "Unfreeze all layers and fine-tune for reconstruction.",
              ]}
            />
            <Checkpoint
              prompt="Why did pre-training unlock deeper models before modern data and compute?"
              options={[
                {
                  label: "Layer-wise RBM training gave good initializations, avoiding poor local minima.",
                  correct: true,
                  explanation:
                    "Pre-training moved parameters near useful basins so fine-tuning needed less data.",
                },
                {
                  label: "It removed the need for backpropagation entirely.",
                  correct: false,
                  explanation: "Fine-tuning still used backpropagation.",
                },
                {
                  label: "It increased dataset size automatically.",
                  correct: false,
                  explanation: "Pre-training reorganized training, not data volume.",
                },
              ]}
            />
          </SectionBlock>

          <SectionBlock title="4) The Flourishing Development of Deep Learning">
            <p className="text-sm leading-relaxed text-slate-700">
              After pre-training sparked interest, Hinton&apos;s team won ImageNet 2012 with the
              8-layer AlexNet, showing that model depth strongly boosts performance. Geoffrey
              Hinton, Yoshua Bengio, and Yann LeCun led the field and received the 2018 Turing Award
              for deep learning.
            </p>
            <Checkpoint
              prompt="What did AlexNet demonstrate in 2012?"
              options={[
                {
                  label: "Depth of convolutional networks is crucial for performance gains on vision tasks.",
                  correct: true,
                  explanation: "AlexNet&apos;s 8 layers delivered a decisive ImageNet victory.",
                },
                {
                  label: "Shallow networks are always better than deep ones.",
                  correct: false,
                  explanation: "AlexNet showed the opposite.",
                },
                {
                  label: "Pre-training removed the need for labels in ImageNet.",
                  correct: false,
                  explanation: "AlexNet trained in a supervised way.",
                },
              ]}
            />
          </SectionBlock>

          <SectionBlock id="hierarchy" title="2. Hierarchical Feature Learning" eyebrow="Feature abstraction">
            <InfoCard title="1) What Are High-Level Features?">
              <p>
                Deep networks progressively extract abstract features. Lower layers capture simple
                lines; higher layers capture global patterns. High-level or abstract features have
                clear, conceptual meaning—like “Zhang San&apos;s face” or “a Labrador&apos;s head”
                regardless of pose or accessories.
              </p>
            </InfoCard>
            <InfoCard title="2) Example: Convolutional Network for Face Recognition">
              <p>
                In lower layers, neurons activate on simple lines; in higher layers, larger-scale
                facial patterns activate the neurons. Later-layer features are more advanced and
                strongly tied to the recognition task.
              </p>
            </InfoCard>

            <FeatureHierarchyDemo />
            <GuidedSteps
              steps={[
                "Move through layers to see receptive fields grow.",
                "Observe how features change from edges to semantic parts.",
                "Connect this to task relevance—later layers focus on what matters for recognition.",
              ]}
            />
            <Checkpoint
              prompt="Why do later convolutional layers become more task-related and abstract?"
              options={[
                {
                  label:
                    "Receptive fields expand, letting later layers combine simpler patterns into clear concepts needed for the task.",
                  correct: true,
                  explanation:
                    "Larger context plus task-driven training yields semantic, task-relevant features.",
                },
                {
                  label: "Because early layers are randomly frozen.",
                  correct: false,
                  explanation: "Early layers are trained; abstraction comes from depth and objectives.",
                },
                {
                  label: "Because higher layers remove non-linearities.",
                  correct: false,
                  explanation: "Non-linearities remain; abstraction comes from composition and training.",
                },
              ]}
            />

            <InfoCard title="3) Shared Bottom Layers, Varied Top Layers">
              <p>
                Different convolutional networks (faces, cars, elephants, chairs) share similar
                low-level features because all images are built from simple lines. Higher layers
                diverge as features combine into object-specific contours.
              </p>
            </InfoCard>
            <InfoCard title="4) Comparison with Human Information Processing">
              <p>
                Deep network hierarchies resemble human visual processing. Early visual areas align
                with lower convolutional layers, while later areas align with higher layers,
                supporting the analogy to human perception.
              </p>
            </InfoCard>
          </SectionBlock>

          <SectionBlock title="Success Factors: Data, Compute, Open Source">
            <p className="text-sm leading-relaxed text-slate-700">
              Today, pre-training is no longer essential when data is abundant and computation is
              powerful. The rise of deep learning rests on algorithmic advances plus big data,
              stronger computing resources, and industry-wide open-source sharing of code, data,
              papers, and models.
            </p>
            <SuccessFactorsDemo />
          </SectionBlock>

          <SectionBlock title="Section Summary" eyebrow="Key takeaways">
            <ul className="space-y-2 text-sm leading-relaxed text-slate-700">
              <li>
                Deep neural networks (more than two hidden layers) outperform equally sized shallow
                networks by composing features hierarchically.
              </li>
              <li>
                Training can be difficult because backpropagation follows gradients on rugged loss
                surfaces with many valleys and saddles.
              </li>
              <li>
                Hinton&apos;s RBM-based pre-training provided effective initialization, opening the
                door to deeper models before today&apos;s data and compute scale.
              </li>
              <li>
                Hierarchical feature learning yields abstract, task-relevant representations and
                mirrors aspects of human visual processing.
              </li>
              <li>
                Modern success depends on algorithms plus data scale, computational power, and
                open-source collaboration.
              </li>
            </ul>
          </SectionBlock>
        </main>
      </div>
    </div>
  );
}

export default App;
